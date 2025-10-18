import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: action('onChange') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {
  args: {
    type: 'number',
    value: 50,
    min: 10,
    max: 1000,
  },
};

export const TextInput: Story = {
  args: {
    type: 'text',
    value: 'テキスト',
  },
};

export const DisabledInput: Story = {
  args: {
    type: 'number',
    value: 100,
    disabled: true,
  },
};