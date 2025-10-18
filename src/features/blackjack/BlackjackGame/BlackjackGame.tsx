import React, { useState } from 'react';
import { Text } from '../../../components/Text';
import { BetArea } from '../components/BetArea';
import { GameInfo } from '../components/GameInfo';
import { PlayerArea } from '../components/PlayerArea';
import { GameControls } from '../components/GameControls';
import { useBlackjackGame } from '../useBlackjackGame';
import { GAME_CONFIG } from '../../../Config';
import styles from './BlackjackGame.module.css';

export const BlackjackGame: React.FC = () => {
  const [betAmount, setBetAmount] = useState<number>(GAME_CONFIG.DEFAULT_BET);
  const {
    gameState,
    playerScore,
    dealerScore,
    message,
    messageClass,
    canDouble,
    actions,
  } = useBlackjackGame();

  const handleBetAmountChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    setBetAmount(numValue);
  };

  const handlePlaceBet = () => {
    actions.placeBet(betAmount);
  };

  return (
    <div className={styles.container}>
      <Text variant="title">ブラックジャック</Text>

      <div className={styles.gameContainer}>
        <GameInfo
          chips={gameState.chips}
          currentBet={gameState.currentBet}
        />

        <BetArea
          betAmount={betAmount}
          onBetAmountChange={handleBetAmountChange}
          onPlaceBet={handlePlaceBet}
          disabled={gameState.gameInProgress}
          minBet={GAME_CONFIG.MIN_BET}
          maxBet={gameState.chips}
        />

        <div className={styles.gameArea}>
          <PlayerArea
            cards={gameState.dealerCards}
            score={dealerScore}
            title="ディーラー"
            hideSecondCard={gameState.dealerHidden}
          />

          <PlayerArea
            cards={gameState.playerCards}
            score={playerScore}
            title="プレイヤー"
          />
        </div>

        <div className={`${styles.message} ${messageClass ? styles[messageClass] : ''}`}>
          <Text variant="message">{message}</Text>
        </div>

        <GameControls
          onHit={actions.hit}
          onStand={actions.stand}
          onDoubleDown={actions.doubleDown}
          onNewGame={actions.newGame}
          gameInProgress={gameState.gameInProgress}
          canDouble={canDouble}
        />
      </div>
    </div>
  );
};