import { Meta, StoryObj } from '@storybook/react';

import PixelBird from '.';

const meta = {
  title: 'Components/Molecules/PixelBird',
  component: PixelBird,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PixelBird>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
