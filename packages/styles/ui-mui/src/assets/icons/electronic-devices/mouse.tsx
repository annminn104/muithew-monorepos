import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MouseIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M5 9a7 7 0 0114 0v6a7 7 0 11-14 0V9z'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M10.5 8.5a1.5 1.5 0 013 0v2a1.5 1.5 0 01-3 0v-2z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2v5'></path>
    </SvgIcon>
  );
}

export default React.memo(MouseIcon);
