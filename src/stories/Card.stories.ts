import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../features/blackjack/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Features/Blackjack/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedCard: Story = {
  args: {
    card: {
      suit: '♥',
      value: 'A',
      numValue: 11,
    },
  },
};

export const BlackCard: Story = {
  args: {
    card: {
      suit: '♠',
      value: 'K',
      numValue: 10,
    },
  },
};

export const NumberCard: Story = {
  args: {
    card: {
      suit: '♦',
      value: '7',
      numValue: 7,
    },
  },
};

export const HiddenCard: Story = {
  args: {
    hidden: true,
  },
};