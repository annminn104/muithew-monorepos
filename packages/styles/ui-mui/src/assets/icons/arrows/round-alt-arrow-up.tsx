import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundAltArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M15 13.5L12 10.5L9 13.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundAltArrowUpIcon;
