import type { Meta, StoryObj } from '@storybook/react';
import { BlackjackGame } from '../features/blackjack/BlackjackGame';

const meta: Meta<typeof BlackjackGame> = {
  title: 'Features/BlackjackGame',
  component: BlackjackGame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};