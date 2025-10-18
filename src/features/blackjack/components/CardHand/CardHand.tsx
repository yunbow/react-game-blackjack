import React from 'react';
import { Card } from '../Card';
import type { Card as CardType } from '../../types';
import styles from './CardHand.module.css';

export interface CardHandProps {
  cards: CardType[];
  hideSecondCard?: boolean;
}

export const CardHand: React.FC<CardHandProps> = ({
  cards,
  hideSecondCard = false,
}) => {
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <Card
          key={`${card.suit}-${card.value}-${index}`}
          card={card}
          hidden={hideSecondCard && index === 1}
        />
      ))}
    </div>
  );
};