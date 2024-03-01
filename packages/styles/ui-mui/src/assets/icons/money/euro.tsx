import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EuroIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 6.803a6 6 0 100 10.395M5 10.5h5M5 13.5h5' />
    </SvgIcon>
  );
}

export default EuroIcon;
