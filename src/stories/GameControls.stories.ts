import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { GameControls } from '../features/blackjack/components/GameControls';

const meta: Meta<typeof GameControls> = {
  title: 'Features/Blackjack/GameControls',
  component: GameControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onHit: action('onHit'),
    onStand: action('onStand'),
    onDoubleDown: action('onDoubleDown'),
    onNewGame: action('onNewGame'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GameInProgress: Story = {
  args: {
    gameInProgress: true,
    canDouble: true,
  },
};

export const GameNotInProgress: Story = {
  args: {
    gameInProgress: false,
    canDouble: false,
  },
};

export const CannotDouble: Story = {
  args: {
    gameInProgress: true,
    canDouble: false,
  },
};