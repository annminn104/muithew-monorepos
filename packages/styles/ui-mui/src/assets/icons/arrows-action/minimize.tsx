import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MinimizeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M2 22l7-7m0 0H3.143M9 15v5.857' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M22 2l-7 7m0 0h5.857M15 9V3.143' />
    </SvgIcon>
  );
}

export default React.memo(MinimizeIcon);
