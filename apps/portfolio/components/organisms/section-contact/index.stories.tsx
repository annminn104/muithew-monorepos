import { Meta, StoryObj } from '@storybook/react';

import SectionContact from '.';

const meta = {
  title: 'Components/Organisms/SectionContact',
  component: SectionContact,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionContact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    contact: []
  }
};
