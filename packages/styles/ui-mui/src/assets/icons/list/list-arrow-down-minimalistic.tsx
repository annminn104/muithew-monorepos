import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListArrowDownMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M11 16H3M12 11H3' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9' />
    </SvgIcon>
  );
}

export default ListArrowDownMinimalisticIcon;
