import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SafeSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 7v10' />
      <path stroke={linearColor} strokeWidth='1.5' d='M11 12a3 3 0 116 0 3 3 0 01-6 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16.5 9.5L18 8M10 16l1.5-1.5M11.5 9.5L10 8M18 16l-1.5-1.5' />
    </SvgIcon>
  );
}

export default SafeSquareIcon;
