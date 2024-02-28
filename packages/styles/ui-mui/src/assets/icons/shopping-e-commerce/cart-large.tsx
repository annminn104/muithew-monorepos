import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CartLargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 3l.265.088c1.32.44 1.98.66 2.357 1.184C5 4.796 5 5.492 5 6.883V9.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h8'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M11 9H8' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 6h11.45c2.055 0 3.083 0 3.527.674.445.675.04 1.619-.77 3.508l-.428 1c-.378.882-.567 1.322-.942 1.57-.376.248-.856.248-1.815.248H5'
      />
    </SvgIcon>
  );
}

export default CartLargeIcon;
