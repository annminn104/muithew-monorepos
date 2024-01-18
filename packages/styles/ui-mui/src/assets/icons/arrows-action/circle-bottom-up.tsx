import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CircleBottomUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3 21l8-8m0 0H5m6 0v6' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12' />
    </SvgIcon>
  );
}

export default React.memo(CircleBottomUpIcon);
