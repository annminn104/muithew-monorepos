import { Meta, StoryObj } from '@storybook/react';

import CardGithub from '.';

const meta = {
  title: 'Components/Molecules/CardGithub',
  component: CardGithub,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CardGithub>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: '',
    desc: ''
  }
};
