import type { Meta, StoryObj } from '@storybook/react';
import { CardHand } from '../features/blackjack/components/CardHand';

const sampleCards = [
  { suit: '♠' as const, value: 'A' as const, numValue: 11 },
  { suit: '♥' as const, value: 'K' as const, numValue: 10 },
  { suit: '♦' as const, value: '7' as const, numValue: 7 },
];

const meta: Meta<typeof CardHand> = {
  title: 'Features/Blackjack/CardHand',
  component: CardHand,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PlayerHand: Story = {
  args: {
    cards: sampleCards,
    hideSecondCard: false,
  },
};

export const DealerHandHidden: Story = {
  args: {
    cards: sampleCards,
    hideSecondCard: true,
  },
};

export const TwoCards: Story = {
  args: {
    cards: sampleCards.slice(0, 2),
    hideSecondCard: false,
  },
};