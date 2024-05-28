import { Meta, StoryObj } from '@storybook/react';

import SectionSummary from '.';

const meta = {
  title: 'Components/Organisms/SectionSummary',
  component: SectionSummary,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof SectionSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    summary: [],
    resume: '',
    socials: []
  }
};
