import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserSpeakIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='10' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2' />
    </SvgIcon>
  );
}

export default UserSpeakIcon;
