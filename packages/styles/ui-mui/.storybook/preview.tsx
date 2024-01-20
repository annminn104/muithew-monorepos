import React from 'react';

import { reactPreviewStorybook } from '@configs/storybook';
import { MuiProvider } from '@core/providers';
import { Preview } from '@storybook/react';

const preview: Preview = {
  ...reactPreviewStorybook,
  decorators: [
    (Story) => (
      <MuiProvider>
        <Story />
      </MuiProvider>
    )
  ]
};

export default preview;
