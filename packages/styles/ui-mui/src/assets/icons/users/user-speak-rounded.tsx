import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserSpeakRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='10' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <ellipse cx='10' cy='17' stroke={linearColor} strokeWidth='1.5' rx='7' ry='4' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 2s2 1.2 2 4-2 4-2 4M17 4s1 .6 1 2-1 2-1 2' />
    </SvgIcon>
  );
}

export default React.memo(UserSpeakRoundedIcon);
