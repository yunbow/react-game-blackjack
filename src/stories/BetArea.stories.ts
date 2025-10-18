import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BetArea } from '../features/blackjack/components/BetArea';

const meta: Meta<typeof BetArea> = {
  title: 'Features/Blackjack/BetArea',
  component: BetArea,
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
  args: {
    onBetAmountChange: action('onBetAmountChange'),
    onPlaceBet: action('onPlaceBet'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    betAmount: 50,
    disabled: false,
    minBet: 10,
    maxBet: 1000,
  },
};

export const Disabled: Story = {
  args: {
    betAmount: 100,
    disabled: true,
    minBet: 10,
    maxBet: 1000,
  },
};