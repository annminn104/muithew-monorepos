import { Meta, StoryObj } from '@storybook/react';

import Logo from '.';

const meta = {
  title: 'Components/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
