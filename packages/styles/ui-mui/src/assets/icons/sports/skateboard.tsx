import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SkateboardIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 7l.813 1.219A4 4 0 006.14 10h11.718a4 4 0 003.328-1.781L22 7' />
      <circle cx='7' cy='15' r='2' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='17' cy='15' r='2' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default SkateboardIcon;
