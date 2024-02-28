import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListDownMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M20 11H3M10 16H3' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M14 15l3.5 3 3.5-3' />
    </SvgIcon>
  );
}

export default ListDownMinimalisticIcon;
