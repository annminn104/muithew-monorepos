import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundDoubleAltArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M9 15.5L12 12.5L15 15.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M9 11.5L12 8.5L15 11.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundDoubleAltArrowUpIcon;
