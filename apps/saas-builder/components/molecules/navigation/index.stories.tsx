import { Meta, StoryObj } from '@storybook/react';

import Navigation from '.';

const meta = {
  title: 'Components/Molecules/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
