import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DoubleAltArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M19 13L12 7L5 13' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M19 17L12 11L5 17' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default DoubleAltArrowUpIcon;
