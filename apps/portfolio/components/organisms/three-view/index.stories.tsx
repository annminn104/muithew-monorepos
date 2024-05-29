import { Meta, StoryObj } from '@storybook/react';

import ThreeView from '.';

const meta = {
  title: 'Components/Organisms/ThreeView',
  component: ThreeView,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ThreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    canvas: {
      children: null
    }
  }
};
