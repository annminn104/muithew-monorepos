import { Meta, StoryObj } from '@storybook/react';

import Button from './';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['text', 'outlined', 'contained'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    disabled: {
      control: 'boolean'
    },
    href: {
      control: 'text'
    },
    disableElevation: {
      control: 'boolean'
    },
    color: {
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: 'select'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: 'text'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  }
};

export const Contained: Story = {
  args: {
    variant: 'contained'
  }
};
