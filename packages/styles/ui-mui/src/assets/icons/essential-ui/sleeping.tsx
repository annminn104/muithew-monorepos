import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SleepingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M2 6v12M22 18v-2.357c0-1.995 0-2.993-.28-3.794A5 5 0 0018.65 8.78C17.85 8.5 16.852 8.5 14.857 8.5c-.798 0-1.197 0-1.518.112a2 2 0 00-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M9.5 11a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
    </SvgIcon>
  );
}

export default SleepingIcon;
