import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StopwatchIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M21 13a9 9 0 11-18 0 9 9 0 0118 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 13V9' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 2h4' />
    </SvgIcon>
  );
}

export default React.memo(StopwatchIcon);
