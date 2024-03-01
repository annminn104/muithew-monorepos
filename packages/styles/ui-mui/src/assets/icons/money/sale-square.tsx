import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SaleSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 15l6-6' />
      <path fill={linearColor} d='M15.5 14.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 9.5a1 1 0 11-2 0 1 1 0 012 0z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default SaleSquareIcon;
