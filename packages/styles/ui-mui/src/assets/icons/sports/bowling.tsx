import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BowlingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='7' r='1.5' stroke={linearColor} strokeWidth='1.5' transform='rotate(-90 12 7)' />
      <circle cx='12' cy='12' r='1.5' stroke={linearColor} strokeWidth='1.5' transform='rotate(-90 12 12)' />
      <path stroke={linearColor} strokeWidth='1.5' d='M8 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z' />
    </SvgIcon>
  );
}

export default BowlingIcon;
