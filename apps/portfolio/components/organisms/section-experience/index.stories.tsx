import { Meta, StoryObj } from '@storybook/react';

import SectionExperience from '.';

const meta = {
  title: 'Components/Organisms/SectionExperience',
  component: SectionExperience,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionExperience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    experiences: []
  }
};
