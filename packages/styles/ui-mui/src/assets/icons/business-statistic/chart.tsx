import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChartIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21 22v-7.5a1.5 1.5 0 00-1.5-1.5h-3a1.5 1.5 0 00-1.5 1.5V22M15 22V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2c-1.414 0-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17M9 22V9.5A1.5 1.5 0 007.5 8h-3A1.5 1.5 0 003 9.5V22'
      />
    </SvgIcon>
  );
}

export default ChartIcon;
