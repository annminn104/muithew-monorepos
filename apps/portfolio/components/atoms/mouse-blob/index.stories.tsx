import { Meta, StoryObj } from '@storybook/react';

import MouseBlob from '.';

const meta = {
  title: 'Components/Atoms/MouseBlob',
  component: MouseBlob,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof MouseBlob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
