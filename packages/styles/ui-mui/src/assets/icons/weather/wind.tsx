import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WindIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3 8h6.5A2.5 2.5 0 107 5.5v.357M4 14h14.5a3.5 3.5 0 11-3.5 3.5V17' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 11h16.5A3.5 3.5 0 1015 7.5V8' />
    </SvgIcon>
  );
}

export default WindIcon;
