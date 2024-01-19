import React from 'react';

import { reactPreviewStorybook } from '@configs/storybook';
import { Preview } from '@storybook/react';

const preview: Preview = {
  ...reactPreviewStorybook,
  decorators: [(Story) => <Story />]
};

export default preview;
