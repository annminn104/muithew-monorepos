import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsCaseChargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 11c0-3.75 0-5.625.955-6.939A5 5 0 015.06 2.955C6.375 2 8.251 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 011.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 01-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 01-1.106-1.106C3 18.625 3 16.749 3 13v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 18l2-2.5h-4l2-2.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 9h10' />
    </SvgIcon>
  );
}

export default AirbudsCaseChargeIcon;
