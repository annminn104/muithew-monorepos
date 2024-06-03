import { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta = {
  title: 'Components/Templates/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
