import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RewindBackCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 8.071l-3.222 2.302a2 2 0 000 3.254L11 15.93m5.5-.872V8.943a1 1 0 00-1.581-.814l-4.28 3.057a1 1 0 000 1.628l4.28 3.056a1 1 0 001.581-.813z'
      />
    </SvgIcon>
  );
}

export default RewindBackCircleIcon;
