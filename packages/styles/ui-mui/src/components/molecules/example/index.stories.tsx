import { Meta, StoryObj } from '@storybook/react';

import Example from '.';

const meta = {
  title: 'Components/Molecules/Example',
  component: Example,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
