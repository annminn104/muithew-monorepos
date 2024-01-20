import { reactMainConfigStorybook } from '@configs/storybook';
import { StorybookConfig } from '@storybook/react-vite';

const main: StorybookConfig = {
  ...reactMainConfigStorybook,
  stories: ['../src/components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    storyStoreV7: true
  }
};

export default main;
