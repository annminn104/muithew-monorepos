import type { Meta, StoryObj } from '@storybook/react';

import Color from './';

const meta = {
  title: 'Components/Atoms/Color',
  component: Color,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
