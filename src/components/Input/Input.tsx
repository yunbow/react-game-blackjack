import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  type?: 'text' | 'number';
  value: string | number;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  min,
  max,
  disabled = false,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      min={min}
      max={max}
      disabled={disabled}
      className={`${styles.input} ${className || ''}`}
    />
  );
};