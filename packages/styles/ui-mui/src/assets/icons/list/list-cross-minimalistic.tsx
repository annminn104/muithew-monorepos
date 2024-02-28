import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListCrossMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M11 11H3M11 16H3' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 16l5-5m0 5l-5-5' />
    </SvgIcon>
  );
}

export default ListCrossMinimalisticIcon;
