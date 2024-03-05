import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DoubleAltArrowRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M11 19L17 12L11 5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M6.9998 19L12.9998 12L6.9998 5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default DoubleAltArrowRightIcon;
