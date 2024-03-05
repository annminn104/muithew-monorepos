import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundAltArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M15 10.5L12 13.5L9 10.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundAltArrowDownIcon;
