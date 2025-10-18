import React from 'react';
import { Text } from '../../../../components/Text';
import styles from './GameInfo.module.css';

export interface GameInfoProps {
  chips: number;
  currentBet: number;
}

export const GameInfo: React.FC<GameInfoProps> = ({
  chips,
  currentBet,
}) => {
  return (
    <div className={styles.gameInfo}>
      <div>
        <Text variant="chips">チップ: {chips}</Text>
      </div>
      <div>
        <Text variant="chips">ベット: {currentBet}</Text>
      </div>
    </div>
  );
};