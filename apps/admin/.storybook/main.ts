import { StorybookConfig } from '@storybook/react-vite';

import { reactMainConfigStorybook } from '@configs/storybook';

const main: StorybookConfig = {
  ...reactMainConfigStorybook,
  stories: ['../src/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)']
};

export default main;
