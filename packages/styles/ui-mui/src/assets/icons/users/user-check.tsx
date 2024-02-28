import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserCheckIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='18' cy='16' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16.666 16l.834 1 1.833-1.889' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15 13.327A13.57 13.57 0 0012 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5'
      />
    </SvgIcon>
  );
}

export default UserCheckIcon;
