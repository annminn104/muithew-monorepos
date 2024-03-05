import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundDoubleAltArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M9 8.5L12 11.5L15 8.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M9 12.5L12 15.5L15 12.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundDoubleAltArrowDownIcon;
