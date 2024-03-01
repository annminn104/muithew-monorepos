import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RewindForwardCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13 8.071l3.221 2.302a2 2 0 010 3.254L13 15.93m-5.5-.872V8.943a1 1 0 011.581-.814l4.28 3.057a1 1 0 010 1.628L9.08 15.87a1 1 0 01-1.581-.813z'
      />
    </SvgIcon>
  );
}

export default RewindForwardCircleIcon;
