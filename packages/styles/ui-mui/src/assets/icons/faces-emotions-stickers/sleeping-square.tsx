import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SleepingSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
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
        strokeWidth='1.5'
        d='M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2'
      />
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

export default React.memo(SleepingSquareIcon);
