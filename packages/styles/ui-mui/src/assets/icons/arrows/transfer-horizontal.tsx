import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TransferHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M20 10L4 10L9.5 4' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4 14L20 14L14.5 20' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default TransferHorizontalIcon;
