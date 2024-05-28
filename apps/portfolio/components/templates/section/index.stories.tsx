import { Meta, StoryObj } from '@storybook/react';

import SectionUI from '.';

const meta = {
  title: 'Components/Templates/SectionUI',
  component: SectionUI,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    component: <></>,
    id: 'id'
  }
};
