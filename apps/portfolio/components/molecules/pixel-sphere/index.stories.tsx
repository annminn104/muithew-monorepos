import { Meta, StoryObj } from '@storybook/react';

import PixelSphere from '.';

const meta = {
  title: 'Components/Molecules/PixelSphere',
  component: PixelSphere,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PixelSphere>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
