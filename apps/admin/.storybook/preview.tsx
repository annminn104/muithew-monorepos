import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { reactPreviewStorybook } from '@configs/storybook';
import { Preview } from '@storybook/react';

import RootProvider from '../src/provider';

const preview: Preview = {
  ...reactPreviewStorybook,
  decorators: [
    withRouter,
    (Story) => (
      <RootProvider>
        <Story />
      </RootProvider>
    )
  ]
};

export default preview;
