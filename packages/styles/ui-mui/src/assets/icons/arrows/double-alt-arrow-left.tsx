import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DoubleAltArrowLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M12.9999 19L6.99991 12L12.9999 5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M16.9998 19L10.9998 12L16.9998 5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default DoubleAltArrowLeftIcon;
