import type { Meta, StoryObj } from '@storybook/react';
import { GameInfo } from '../features/blackjack/components/GameInfo';

const meta: Meta<typeof GameInfo> = {
  title: 'Features/Blackjack/GameInfo',
  component: GameInfo,
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

export const Default: Story = {
  args: {
    chips: 1000,
    currentBet: 50,
  },
};

export const HighBet: Story = {
  args: {
    chips: 850,
    currentBet: 150,
  },
};

export const LowChips: Story = {
  args: {
    chips: 100,
    currentBet: 25,
  },
};