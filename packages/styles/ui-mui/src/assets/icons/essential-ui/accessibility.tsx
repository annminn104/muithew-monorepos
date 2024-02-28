import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AccessibilityIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M14 7a2 2 0 11-4 0 2 2 0 014 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18 10s-3.537 1.5-6 1.5S6 10 6 10M12 12v1.452m0 0a3 3 0 00.476 1.623L15 19m-3-5.548a3 3 0 01-.476 1.623L9 19'
      />
    </SvgIcon>
  );
}

export default AccessibilityIcon;
