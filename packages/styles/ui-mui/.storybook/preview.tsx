import React from 'react';

import { reactPreviewStorybook } from '@configs/storybook';
import { MuiReactProvider } from '@core/providers';
import { Preview } from '@storybook/react';

const preview: Preview = {
  ...reactPreviewStorybook,
  decorators: [
    (Story) => (
      <MuiReactProvider>
        <Story />
      </MuiReactProvider>
    )
  ]
};

export default preview;
