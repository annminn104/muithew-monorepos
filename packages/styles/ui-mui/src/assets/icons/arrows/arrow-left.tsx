import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M20 12H4M4 12L10 6M4 12L10 18' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowLeftIcon;
