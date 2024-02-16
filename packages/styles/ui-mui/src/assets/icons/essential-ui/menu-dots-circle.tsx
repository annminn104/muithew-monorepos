import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MenuDotsCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.009m3.995 0h.01m3.977 0H16' />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(MenuDotsCircleIcon);
