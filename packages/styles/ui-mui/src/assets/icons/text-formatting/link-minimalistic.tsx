import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 12h6M9 18H8A6 6 0 018 6h1M15 6h1a6 6 0 010 12h-1' />
    </SvgIcon>
  );
}

export default React.memo(LinkMinimalisticIcon);
