import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlusMinusIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M3.465 20.536C2 19.07 2 16.713 2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464M3.465 20.536l17.07-17.072'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 17h-5M10.5 8H8m0 0H5.5M8 8V5.5M8 8v2.5' />
    </SvgIcon>
  );
}

export default PlusMinusIcon;
