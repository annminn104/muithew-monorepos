import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MinusCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 12H9' />
    </SvgIcon>
  );
}

export default MinusCircleIcon;
