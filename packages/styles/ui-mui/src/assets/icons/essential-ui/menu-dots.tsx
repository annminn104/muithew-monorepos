import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MenuDotsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='5' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='19' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default MenuDotsIcon;
