import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BugMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M5 10a7 7 0 0114 0v5a7 7 0 11-14 0v-5z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 13h3M5 13H2M20.5 7l-1.798.72M3.5 7l1.798.72M14.5 3.5L17 2M9.5 3.5L7 2M20.5 19l-2-.8M3.5 19l2-.8M10.5 10.5h3M10.5 15.5h3'
      />
    </SvgIcon>
  );
}

export default BugMinimalisticIcon;
