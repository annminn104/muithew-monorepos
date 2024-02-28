import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MaximizeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 15l-7 7m0 0h5.857M2 22v-5.857' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 9l7-7m0 0h-5.857M22 2v5.857' />
    </SvgIcon>
  );
}

export default MaximizeIcon;
