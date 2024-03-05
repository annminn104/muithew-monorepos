import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundDoubleAltArrowLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M15.5 9L12.5 12L15.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M11.5 9L8.5 12L11.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundDoubleAltArrowLeftIcon;
