import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M4 12H20M20 12L14 6M20 12L14 18' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowRightIcon;
