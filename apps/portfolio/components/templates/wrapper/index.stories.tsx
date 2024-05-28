import { Meta, StoryObj } from '@storybook/react';

import Wrapper from '.';

const meta = {
  title: 'Components/Templates/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
