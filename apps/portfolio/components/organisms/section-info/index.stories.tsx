import { Meta, StoryObj } from '@storybook/react';

import SectionInfo from '.';

const meta = {
  title: 'Components/Organisms/SectionInfo',
  component: SectionInfo,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    name: 'Frontend Developer',
    role: 'Developer'
  }
};
