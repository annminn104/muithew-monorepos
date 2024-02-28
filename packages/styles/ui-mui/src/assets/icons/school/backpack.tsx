import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BackpackIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 10.911v-.18a6 6 0 014.618-5.757l.176-.04.167-.036a19 19 0 018.421.076A6 6 0 0121 10.911v5.464a4.519 4.519 0 01-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.519 4.519 0 013 16.375v-5.464z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.5 15.5V17M15.959 4.5A3 3 0 0013 2h-2a3 3 0 00-2.959 2.5M3 14a22.16 22.16 0 0018 0M10 13h4'
      />
    </SvgIcon>
  );
}

export default BackpackIcon;
