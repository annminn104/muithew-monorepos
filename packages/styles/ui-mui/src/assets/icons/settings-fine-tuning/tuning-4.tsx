import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Tuning4Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' transform='rotate(-90 12 12)' />
      <circle cx='10' cy='20' r='2' stroke={linearColor} strokeWidth='1.5' transform='rotate(-90 10 20)' />
      <circle cx='2' cy='2' r='2' stroke={linearColor} strokeWidth='1.5' transform='matrix(0 -1 -1 0 16 6)' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16 12h3M14 20h5M10 4H5M5 12h3M5 20h1M19 4h-1' />
    </SvgIcon>
  );
}

export default Tuning4Icon;
