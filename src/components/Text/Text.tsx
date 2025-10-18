import React from 'react';
import styles from './Text.module.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'score' | 'message' | 'title' | 'chips';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  className,
}) => {
  return (
    <span className={`${styles.text} ${styles[variant]} ${className || ''}`}>
      {children}
    </span>
  );
};