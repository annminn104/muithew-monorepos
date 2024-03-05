import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundSortHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default RoundSortHorizontalIcon;
