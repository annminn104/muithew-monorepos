import { Meta, StoryObj } from '@storybook/react';

import Body from '.';

const meta = {
  title: 'Components/Templates/Body',
  component: Body,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
