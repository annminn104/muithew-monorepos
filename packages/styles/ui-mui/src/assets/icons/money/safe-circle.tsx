import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SafeCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 8v8'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 12a2 2 0 114 0 2 2 0 01-4 0z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16 10l1-1M11 15l1-1M12 10l-1-1M17 15l-1-1'></path>
    </SvgIcon>
  );
}

export default React.memo(SafeCircleIcon);
