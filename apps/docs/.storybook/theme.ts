import { create } from '@storybook/theming';
import { getVersionInfo } from '@utils/version';

import { version } from '../package.json';

export const theme = create({
  base: 'light',
  brandTitle: `Muithew Docs - ${getVersionInfo(version)}`,
  brandUrl: 'https://github.com/annminn104/muithew-monorepos'
});
