import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FaceScanCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1' />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2.2 10A10.012 10.012 0 0110 2.2M2.2 14a10.012 10.012 0 007.8 7.8M21.8 10A10.012 10.012 0 0014 2.2M21.8 14a10.012 10.012 0 01-7.8 7.8'
      />
    </SvgIcon>
  );
}

export default FaceScanCircleIcon;
