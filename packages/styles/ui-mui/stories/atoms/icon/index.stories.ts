import type { Meta, StoryObj } from '@storybook/react';

import Icon from './';

const meta = {
  title: 'Components/Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {};
