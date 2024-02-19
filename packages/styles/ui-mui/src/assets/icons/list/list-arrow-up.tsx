import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M11 14H3M11 18H3'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6'></path>
    </SvgIcon>
  );
}

export default React.memo(ListArrowUpIcon);
