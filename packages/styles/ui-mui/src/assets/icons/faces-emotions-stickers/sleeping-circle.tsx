import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SleepingCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1M13.5 11c.567.63 1.256 1 2 1s1.433-.37 2-1'
      />
      <path fill={linearColor} d='M13 16a1 1 0 11-2 0 1 1 0 012 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17 4l3.464-2L19 7.464l3.464-2M14.048 5.5l1.732 1-2.732.732 1.732 1'
      />
    </SvgIcon>
  );
}

export default React.memo(SleepingCircleIcon);
