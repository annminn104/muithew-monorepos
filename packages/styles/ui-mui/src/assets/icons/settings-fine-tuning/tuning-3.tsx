import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Tuning3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' transform='rotate(180 12 12)' />
      <circle cx='20' cy='14' r='2' stroke={linearColor} strokeWidth='1.5' transform='rotate(180 20 14)' />
      <circle cx='2' cy='2' r='2' stroke={linearColor} strokeWidth='1.5' transform='matrix(-1 0 0 1 6 8)' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 8V5M20 10V5M4 14v5M12 19v-3M20 19v-1M4 5v1' />
    </SvgIcon>
  );
}

export default Tuning3Icon;
