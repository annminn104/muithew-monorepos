import { StorybookConfig } from '@storybook/nextjs';

import { addOnGlobalConfigs } from '../global-config';

export const nextMainConfigStorybook: Omit<StorybookConfig, 'stories'> = {
  addons: [...addOnGlobalConfigs],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  features: {
    storyStoreV7: true
  }
};
