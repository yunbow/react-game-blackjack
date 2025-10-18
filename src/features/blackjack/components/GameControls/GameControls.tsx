import React from 'react';
import { Button } from '../../../../components/Button';
import styles from './GameControls.module.css';

export interface GameControlsProps {
  onHit: () => void;
  onStand: () => void;
  onDoubleDown: () => void;
  onNewGame: () => void;
  gameInProgress: boolean;
  canDouble: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onHit,
  onStand,
  onDoubleDown,
  onNewGame,
  gameInProgress,
  canDouble,
}) => {
  return (
    <div className={styles.controls}>
      <Button
        onClick={onHit}
        variant="success"
        disabled={!gameInProgress}
      >
        ヒット
      </Button>
      <Button
        onClick={onStand}
        variant="warning"
        disabled={!gameInProgress}
      >
        スタンド
      </Button>
      <Button
        onClick={onDoubleDown}
        variant="primary"
        disabled={!canDouble}
      >
        ダブルダウン
      </Button>
      <Button
        onClick={onNewGame}
        variant="danger"
      >
        新しいゲーム
      </Button>
    </div>
  );
};