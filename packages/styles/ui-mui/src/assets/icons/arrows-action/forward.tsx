import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ForwardIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M19.5 12l-5-5m5 5l-5 5m5-5h-10c-1.667 0-5 1-5 5' />
    </SvgIcon>
  );
}

export default ForwardIcon;
