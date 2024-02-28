import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14 12a6 6 0 11-6-6M10 12a6 6 0 116 6' />
    </SvgIcon>
  );
}

export default LinkCircleIcon;
