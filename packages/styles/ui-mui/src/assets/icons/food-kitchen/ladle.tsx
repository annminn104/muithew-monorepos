import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LadleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 5.684a3.684 3.684 0 017.368 0v10a6.316 6.316 0 0012.632 0V14.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5z' />
    </SvgIcon>
  );
}

export default LadleIcon;
