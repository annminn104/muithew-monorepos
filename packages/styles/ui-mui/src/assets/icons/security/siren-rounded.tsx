import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SirenRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20 22v-6c0-2.8 0-4.2-.545-5.27a5 5 0 00-2.185-2.185C16.2 8 14.8 8 12 8c-2.8 0-4.2 0-5.27.545a5 5 0 00-2.185 2.185C4 11.8 4 13.2 4 16v6'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15 10.815c1.23 0 2.23.955 2.185 2.185M2 22h20M12 2v3M21 5l-1.5 1.5M3 5l1.5 1.5'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M13.5 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 19v3' />
    </SvgIcon>
  );
}

export default SirenRoundedIcon;
