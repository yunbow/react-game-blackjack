import { useState, useCallback } from 'react';
import type { GameState, Card, GameResult } from './types';
import { createDeck, calculateScore } from './gameLogic';
import { GAME_CONFIG } from '../../Config';

export const useBlackjackGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    deck: createDeck(),
    playerCards: [],
    dealerCards: [],
    chips: GAME_CONFIG.INITIAL_CHIPS,
    currentBet: 0,
    gameInProgress: false,
    dealerHidden: true,
  });

  const [message, setMessage] = useState<string>('');
  const [messageClass, setMessageClass] = useState<GameResult | ''>('');


  const placeBet = useCallback((amount: number) => {
    if (amount < GAME_CONFIG.MIN_BET || amount > gameState.chips) {
      setMessage('無効なベット額です');
      return;
    }

    let newDeck = gameState.deck.length >= 4 ? gameState.deck : createDeck();
    const playerCard1 = newDeck[0];
    const dealerCard1 = newDeck[1];
    const playerCard2 = newDeck[2];
    const dealerCard2 = newDeck[3];
    newDeck = newDeck.slice(4);

    setGameState(prev => ({
      ...prev,
      deck: newDeck,
      currentBet: amount,
      chips: prev.chips - amount,
      playerCards: [playerCard1, playerCard2],
      dealerCards: [dealerCard1, dealerCard2],
      gameInProgress: true,
      dealerHidden: true,
    }));

    const playerScore = calculateScore([playerCard1, playerCard2]);
    const dealerScore = calculateScore([dealerCard1, dealerCard2]);

    if (playerScore === 21 && dealerScore === 21) {
      endGame('プッシュ（引き分け）', 'push', amount);
    } else if (playerScore === 21) {
      endGame('ブラックジャック！あなたの勝ち！', 'win', Math.floor(amount * GAME_CONFIG.BLACKJACK_PAYOUT));
    } else if (dealerScore === 21) {
      endGame('ディーラーのブラックジャック。あなたの負け。', 'lose', 0);
    } else {
      setMessage('カードが配られました');
      setMessageClass('');
    }
  }, [gameState.chips, gameState.deck]);

  const hit = useCallback(() => {
    if (!gameState.gameInProgress) return;

    let newCard: Card;
    let updatedDeck: Card[];

    if (gameState.deck.length === 0) {
      const freshDeck = createDeck();
      newCard = freshDeck[0];
      updatedDeck = freshDeck.slice(1);
    } else {
      newCard = gameState.deck[0];
      updatedDeck = gameState.deck.slice(1);
    }

    const newPlayerCards = [...gameState.playerCards, newCard];
    const playerScore = calculateScore(newPlayerCards);

    setGameState(prev => ({
      ...prev,
      deck: updatedDeck,
      playerCards: newPlayerCards,
    }));

    if (playerScore > 21) {
      endGame('バスト！あなたの負け。', 'lose', 0);
    } else if (playerScore === 21) {
      stand();
    } else {
      setMessage(`スコア: ${playerScore}`);
    }
  }, [gameState.gameInProgress, gameState.playerCards, gameState.deck]);

  const stand = useCallback(() => {
    if (!gameState.gameInProgress) return;

    setGameState(prev => ({
      ...prev,
      dealerHidden: false,
    }));

    // ディーラーのターン
    setTimeout(() => {
      dealerTurn();
    }, 1000);
  }, [gameState.gameInProgress]);

  const dealerTurn = useCallback(() => {
    let currentDealerCards = [...gameState.dealerCards];
    let currentDeck = [...gameState.deck];
    let dealerScore = calculateScore(currentDealerCards);

    const dealerPlay = () => {
      if (dealerScore < GAME_CONFIG.DEALER_STAND_VALUE) {
        let newCard: Card;
        if (currentDeck.length === 0) {
          currentDeck = createDeck();
        }
        newCard = currentDeck[0];
        currentDeck = currentDeck.slice(1);
        currentDealerCards = [...currentDealerCards, newCard];
        dealerScore = calculateScore(currentDealerCards);

        setGameState(prev => ({
          ...prev,
          deck: currentDeck,
          dealerCards: currentDealerCards,
        }));

        setTimeout(dealerPlay, 1000);
      } else {
        determineWinner(currentDealerCards);
      }
    };

    dealerPlay();
  }, [gameState.dealerCards, gameState.deck]);

  const determineWinner = useCallback((finalDealerCards: Card[]) => {
    const playerScore = calculateScore(gameState.playerCards);
    const dealerScore = calculateScore(finalDealerCards);

    if (dealerScore > 21) {
      endGame('ディーラーがバスト！あなたの勝ち！', 'win', gameState.currentBet * GAME_CONFIG.REGULAR_PAYOUT);
    } else if (playerScore > dealerScore) {
      endGame('あなたの勝ち！', 'win', gameState.currentBet * GAME_CONFIG.REGULAR_PAYOUT);
    } else if (playerScore < dealerScore) {
      endGame('ディーラーの勝ち。あなたの負け。', 'lose', 0);
    } else {
      endGame('プッシュ（引き分け）', 'push', gameState.currentBet);
    }
  }, [gameState.playerCards, gameState.currentBet]);

  const doubleDown = useCallback(() => {
    if (!gameState.gameInProgress || gameState.playerCards.length !== 2) return;
    if (gameState.chips < gameState.currentBet) {
      setMessage('チップが足りません');
      return;
    }

    setGameState(prev => ({
      ...prev,
      chips: prev.chips - prev.currentBet,
      currentBet: prev.currentBet * 2,
    }));

    // Call hit logic directly to avoid timing issues
    setTimeout(() => {
      hit();
      if (gameState.gameInProgress) {
        setTimeout(stand, 1000);
      }
    }, 100);
  }, [gameState.gameInProgress, gameState.playerCards.length, gameState.chips, gameState.currentBet, hit, stand]);

  const endGame = useCallback((messageText: string, result: GameResult, winnings: number) => {
    setGameState(prev => ({
      ...prev,
      gameInProgress: false,
      dealerHidden: false,
      chips: prev.chips + winnings,
      currentBet: 0,
    }));

    setMessage(messageText);
    setMessageClass(result);

    if (gameState.chips + winnings <= 0) {
      setTimeout(() => {
        alert('ゲームオーバー！チップがなくなりました。');
        newGame();
      }, 2000);
    }
  }, [gameState.chips]);

  const newGame = useCallback(() => {
    setGameState({
      deck: createDeck(),
      playerCards: [],
      dealerCards: [],
      chips: GAME_CONFIG.INITIAL_CHIPS,
      currentBet: 0,
      gameInProgress: false,
      dealerHidden: true,
    });

    setMessage('');
    setMessageClass('');
  }, []);

  const playerScore = calculateScore(gameState.playerCards);
  const dealerScore = gameState.dealerHidden && gameState.dealerCards.length > 0
    ? calculateScore([gameState.dealerCards[0]])
    : calculateScore(gameState.dealerCards);

  const canDouble = gameState.gameInProgress &&
                   gameState.playerCards.length === 2 &&
                   gameState.chips >= gameState.currentBet;

  return {
    gameState,
    playerScore,
    dealerScore,
    message,
    messageClass,
    canDouble,
    actions: {
      placeBet,
      hit,
      stand,
      doubleDown,
      newGame,
    },
  };
};