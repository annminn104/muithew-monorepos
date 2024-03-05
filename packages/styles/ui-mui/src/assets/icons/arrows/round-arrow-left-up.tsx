import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundArrowLeftUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M15 15L9 9M9 9H13.5M9 9V13.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundArrowLeftUpIcon;
