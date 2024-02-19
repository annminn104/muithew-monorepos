import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListCheckMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M10 11H3M10 16H3'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M14 13.5l2.1 2.5 3.9-5'></path>
    </SvgIcon>
  );
}

export default React.memo(ListCheckMinimalisticIcon);
