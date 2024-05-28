import { Meta, StoryObj } from '@storybook/react';

import BgStar from '.';

const meta = {
  title: 'Components/Molecules/BgStar',
  component: BgStar,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof BgStar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
