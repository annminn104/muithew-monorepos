import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';

import { MuiProvider } from '@core/providers';

import { parameterGlobalConfigs } from '../global-config';

import { Preview } from '@storybook/react';

export const reactPreviewStorybook: Preview = {
  parameters: parameterGlobalConfigs,
  decorators: [
    withRouter,
    (Story) => (
      <MuiProvider>
        <Story />
      </MuiProvider>
    )
  ]
};
