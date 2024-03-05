import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundAltArrowLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M13.5 9L10.5 12L13.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundAltArrowLeftIcon;
