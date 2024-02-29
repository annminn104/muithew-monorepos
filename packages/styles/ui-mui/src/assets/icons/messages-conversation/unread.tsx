import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UnreadIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7 12.9l3.143 3.6L18 7.5'></path>
    </SvgIcon>
  );
}

export default UnreadIcon;
