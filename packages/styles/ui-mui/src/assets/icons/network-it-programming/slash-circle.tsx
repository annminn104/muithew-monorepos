import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SlashCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.294 7.17L12 12l-1.294 4.83' />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default SlashCircleIcon;
