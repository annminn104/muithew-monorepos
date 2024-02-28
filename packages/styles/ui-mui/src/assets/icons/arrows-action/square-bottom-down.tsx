import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SquareBottomDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13 22c4.055-.008 6.178-.107 7.536-1.465C22 19.072 22 16.714 22 12s0-7.071-1.464-8.536C19.07 2 16.714 2 12 2 7.286 2 4.929 2 3.465 3.464 2.107 4.822 2.008 6.944 2 11'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M11 13l-8 8m0 0h6m-6 0v-6' />
    </SvgIcon>
  );
}

export default SquareBottomDownIcon;
