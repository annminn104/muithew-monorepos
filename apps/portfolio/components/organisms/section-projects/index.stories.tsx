import { Meta, StoryObj } from '@storybook/react';

import SectionProjects from '.';

const meta = {
  title: 'Components/Organisms/SectionProjects',
  component: SectionProjects,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    projects: [],
    moreLink: ''
  }
};
