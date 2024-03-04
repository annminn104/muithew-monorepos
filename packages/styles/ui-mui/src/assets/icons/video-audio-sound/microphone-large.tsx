import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MicrophoneLargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M6 8a6 6 0 1112 0v5a6 6 0 01-12 0V8z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 6.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M10 9.5s.473-.5 2-.5c1.527 0 2 .5 2 .5M21 11v2a9 9 0 11-18 0v-2'
      />
    </SvgIcon>
  );
}

export default MicrophoneLargeIcon;
