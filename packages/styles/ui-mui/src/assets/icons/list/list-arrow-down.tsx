import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M11 14H3M11 18H3' />
    </SvgIcon>
  );
}

export default ListArrowDownIcon;
