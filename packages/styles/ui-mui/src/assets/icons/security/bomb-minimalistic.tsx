import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BombMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='9.5' cy='14.5' r='7.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17 7l-2 2M19.5 7.5l1 .5M16 3.5l.5 1M19 5l1-1' />
    </SvgIcon>
  );
}

export default BombMinimalisticIcon;
