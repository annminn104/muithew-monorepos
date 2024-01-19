import { reactMainConfigStorybook } from '@configs/storybook';
import { StorybookConfig } from '@storybook/react-vite';

const main: StorybookConfig = {
  ...reactMainConfigStorybook,
  stories: ['../stories/*.stories.mdx'],
  refs: {
    landing: {
      title: 'Landing',
      url: 'landing/'
    },
    admin: {
      title: 'Admin',
      url: 'admin/'
    },
    'ui-mui': {
      title: 'UI-MUI',
      url: 'ui-mui/'
    }
  },
  features: {
    storyStoreV7: true
  }
};

export default main;
