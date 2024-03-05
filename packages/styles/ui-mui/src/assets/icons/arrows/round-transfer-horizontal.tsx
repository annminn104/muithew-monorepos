import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundTransferHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M17 10L7 10L10.4375 7' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M7 14L17 14L13.5625 17' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundTransferHorizontalIcon;
