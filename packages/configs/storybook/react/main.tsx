import { StorybookConfig } from '@storybook/react-vite';

import { addOnGlobalConfigs } from '../global-config';

export const reactMainConfigStorybook: Omit<StorybookConfig, 'stories'> = {
  addons: [...addOnGlobalConfigs, 'storybook-addon-react-router-v6'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  features: {
    storyStoreV7: true
  }
};
