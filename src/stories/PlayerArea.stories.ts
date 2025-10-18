import type { Meta, StoryObj } from '@storybook/react';
import { PlayerArea } from '../features/blackjack/components/PlayerArea';

const sampleCards = [
  { suit: '♠' as const, value: 'A' as const, numValue: 11 },
  { suit: '♥' as const, value: 'K' as const, numValue: 10 },
];

const meta: Meta<typeof PlayerArea> = {
  title: 'Features/Blackjack/PlayerArea',
  component: PlayerArea,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d4f3d' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Player: Story = {
  args: {
    cards: sampleCards,
    score: 21,
    title: 'プレイヤー',
    hideSecondCard: false,
  },
};

export const Dealer: Story = {
  args: {
    cards: sampleCards,
    score: 11,
    title: 'ディーラー',
    hideSecondCard: true,
  },
};

export const DealerRevealed: Story = {
  args: {
    cards: sampleCards,
    score: 21,
    title: 'ディーラー',
    hideSecondCard: false,
  },
};