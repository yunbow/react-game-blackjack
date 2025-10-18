import React from 'react';
import { Text } from '../../../../components/Text';
import { CardHand } from '../CardHand';
import type { Card } from '../../types';
import styles from './PlayerArea.module.css';

export interface PlayerAreaProps {
  cards: Card[];
  score: number;
  title: string;
  hideSecondCard?: boolean;
}

export const PlayerArea: React.FC<PlayerAreaProps> = ({
  cards,
  score,
  title,
  hideSecondCard = false,
}) => {
  return (
    <div className={styles.playerArea}>
      <h3>
        {title} <Text variant="score">スコア: {score}</Text>
      </h3>
      <CardHand cards={cards} hideSecondCard={hideSecondCard} />
    </div>
  );
};