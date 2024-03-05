import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundTransferDiagonalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M6.50006 4L13.8785 12V7.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M17.3784 19.8779L9.87842 11.9995V16.4995' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundTransferDiagonalIcon;
