import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TransferVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M10 4L10 20L4 14.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M14 20L14 4L20 9.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default TransferVerticalIcon;
