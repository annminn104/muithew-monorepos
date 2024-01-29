import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextUnderlineCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 17h8M8 7v3a4 4 0 008 0V7' />
    </SvgIcon>
  );
}

export default React.memo(TextUnderlineCircleIcon);
