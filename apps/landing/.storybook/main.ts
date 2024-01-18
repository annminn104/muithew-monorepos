import { StorybookConfig } from '@storybook/nextjs';

import { nextMainConfigStorybook } from '@configs/storybook';

const main: StorybookConfig = {
  ...nextMainConfigStorybook,
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)']
};

export default main;
