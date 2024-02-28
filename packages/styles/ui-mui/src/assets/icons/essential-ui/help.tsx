import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HelpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='12' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 9l4-4M5 19l4-4M9 9L5 5M19 19l-4-4' />
    </SvgIcon>
  );
}

export default HelpIcon;
