import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundSortVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundSortVerticalIcon;
