import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HouseIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 22V9.5M20 22V9.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z'
      />
    </SvgIcon>
  );
}

export default HouseIcon;
