import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger'],
    },
  },
  args: { onClick: action('onClick') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'ベット',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'ヒット',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'スタンド',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '新しいゲーム',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'ダブルダウン',
    disabled: true,
  },
};