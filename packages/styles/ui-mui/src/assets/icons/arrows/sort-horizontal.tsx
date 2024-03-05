import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M18 8L6 8M6 8L10.125 4M6 8L10.125 12' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M6 16L18 16M18 16L13.875 12M18 16L13.875 20' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default SortHorizontalIcon;
