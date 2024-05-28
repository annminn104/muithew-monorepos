import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialGithubOutIcon({ linearColor = '#1F1F1F', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        fill={linearColor}
        fillRule='evenodd'
        d='M12 .96C5.903.96.96 5.903.96 12c0 6.097 4.943 11.04 11.04 11.04 6.097 0 11.04-4.943 11.04-11.04C23.04 5.903 18.097.96 12 .96zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z'
        clipRule='evenodd'
      />
      <path
        fill={linearColor}
        d='M12 4c-4.42 0-8 3.556-8 7.946 0 3.516 2.29 6.486 5.47 7.539.4.07.55-.169.55-.378 0-.188-.01-.814-.01-1.48-2.01.368-2.53-.486-2.69-.933-.09-.229-.48-.934-.82-1.123-.28-.149-.68-.516-.01-.526.63-.01 1.08.576 1.23.814.72 1.202 1.87.865 2.33.656.07-.517.28-.864.51-1.063-1.78-.198-3.64-.884-3.64-3.923 0-.864.31-1.58.82-2.136-.08-.198-.36-1.013.08-2.105 0 0 .67-.209 2.2.814a7.47 7.47 0 012-.268c.68 0 1.36.09 2 .268 1.53-1.033 2.2-.814 2.2-.814.44 1.092.16 1.907.08 2.105.51.557.82 1.262.82 2.136 0 3.05-1.87 3.725-3.65 3.923.29.248.54.725.54 1.47 0 1.063-.01 1.917-.01 2.185 0 .209.15.457.55.378C17.806 18.393 20 15.36 20 11.946 20 7.556 16.42 4 12 4z'
      />
    </SvgIcon>
  );
}

export default SocialGithubOutIcon;
