import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FlagIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 22v-8m0 0V4m0 10l2.47-.494a8.676 8.676 0 014.925.452 8.677 8.677 0 005.327.361l.214-.053A1.404 1.404 0 0019 12.904V5.537a1.2 1.2 0 00-1.49-1.164 7.999 7.999 0 01-4.911-.334l-.204-.081a8.677 8.677 0 00-4.924-.452L5 4m0 0V2'
      />
    </SvgIcon>
  );
}

export default FlagIcon;
