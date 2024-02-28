import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CheckCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8.5 12.5l2 2 5-5' />
    </SvgIcon>
  );
}

export default CheckCircleIcon;
