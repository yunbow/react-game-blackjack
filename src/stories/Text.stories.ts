import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
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

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'ボディテキスト',
  },
};

export const Score: Story = {
  args: {
    variant: 'score',
    children: 'スコア: 21',
  },
};

export const Message: Story = {
  args: {
    variant: 'message',
    children: 'ブラックジャック！',
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'ブラックジャック',
  },
};

export const Chips: Story = {
  args: {
    variant: 'chips',
    children: 'チップ: 1000',
  },
};