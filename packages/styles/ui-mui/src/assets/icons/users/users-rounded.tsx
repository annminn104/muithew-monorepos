import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UsersRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='9' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 9a3 3 0 100-6' />
      <ellipse cx='9' cy='17' stroke={linearColor} strokeWidth='1.5' rx='7' ry='4' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37' />
    </SvgIcon>
  );
}

export default UsersRoundedIcon;
