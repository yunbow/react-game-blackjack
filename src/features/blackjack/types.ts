export interface Card {
  suit: '♠' | '♥' | '♦' | '♣';
  value: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
  numValue: number;
}

export interface GameState {
  deck: Card[];
  playerCards: Card[];
  dealerCards: Card[];
  chips: number;
  currentBet: number;
  gameInProgress: boolean;
  dealerHidden: boolean;
}

export type GameResult = 'win' | 'lose' | 'push';

export interface GameActions {
  placeBet: (amount: number) => void;
  hit: () => void;
  stand: () => void;
  doubleDown: () => void;
  newGame: () => void;
}