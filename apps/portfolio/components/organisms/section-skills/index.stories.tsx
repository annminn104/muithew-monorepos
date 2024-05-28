import { Meta, StoryObj } from '@storybook/react';

import SectionSkills from '.';

const meta = {
  title: 'Components/Organisms/SectionSkills',
  component: SectionSkills,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionSkills>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    techStacks: []
  }
};
