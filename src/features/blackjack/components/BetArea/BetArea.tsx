import React from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import styles from './BetArea.module.css';

export interface BetAreaProps {
  betAmount: number;
  onBetAmountChange: (value: string) => void;
  onPlaceBet: () => void;
  disabled: boolean;
  minBet: number;
  maxBet: number;
}

export const BetArea: React.FC<BetAreaProps> = ({
  betAmount,
  onBetAmountChange,
  onPlaceBet,
  disabled,
  minBet,
  maxBet,
}) => {
  return (
    <div className={styles.betArea}>
      <label htmlFor="betAmount">ベット額:</label>
      <Input
        type="number"
        value={betAmount}
        onChange={onBetAmountChange}
        min={minBet}
        max={maxBet}
        disabled={disabled}
      />
      <Button onClick={onPlaceBet} variant="primary" disabled={disabled}>
        ベット
      </Button>
    </div>
  );
};