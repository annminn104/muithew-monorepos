import { reactMainConfigStorybook } from '@configs/storybook';
import { StorybookConfig } from '@storybook/react-vite';

const main: StorybookConfig = {
  ...reactMainConfigStorybook,
  stories: ['../stories/*.stories.mdx'],
  refs: {
    landing: {
      title: 'Landing',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:9009/' : 'landing/'
    },
    admin: {
      title: 'Admin',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:7007/' : 'admin/'
    },
    'ui-mui': {
      title: 'UI-MUI',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:8008/' : 'ui-mui/'
    }
  },
  features: {
    storyStoreV7: true
  }
};

export default main;
