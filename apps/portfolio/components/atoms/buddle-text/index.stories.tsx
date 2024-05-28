import { Meta, StoryObj } from '@storybook/react';

import BuddleText from '.';

const meta = {
  title: 'Components/Atoms/BuddleText',
  component: BuddleText,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof BuddleText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    content: 'Frontend Developer'
  }
};
