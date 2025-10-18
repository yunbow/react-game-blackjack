import React from 'react';
import type { Card as CardType } from '../../types';
import styles from './Card.module.css';

export interface CardProps {
  card?: CardType;
  hidden?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, hidden = false }) => {
  if (hidden || !card) {
    return (
      <div className={`${styles.card} ${styles.back}`}>
        <div>?</div>
        <div>?</div>
      </div>
    );
  }

  const isRed = card.suit === '♥' || card.suit === '♦';

  return (
    <div className={`${styles.card} ${isRed ? styles.red : styles.black}`}>
      <div>{card.value}</div>
      <div>{card.suit}</div>
    </div>
  );
};