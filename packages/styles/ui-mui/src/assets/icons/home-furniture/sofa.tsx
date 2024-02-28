import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SofaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5.556 18h12.888A3.556 3.556 0 0022 14.444V12a2 2 0 10-4 0v1.2a.8.8 0 01-.8.8H6.8a.8.8 0 01-.8-.8V12a2 2 0 10-4 0v2.444A3.556 3.556 0 005.556 18z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20 10c0-.93 0-1.394-.077-1.78a4 4 0 00-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 004.077 8.22C4 8.606 4 9.07 4 10'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 19v-1M4 19v-1' />
    </SvgIcon>
  );
}

export default SofaIcon;
