import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListCheckIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M14 16l2.1 2.5 3.9-5'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M10 14H3M10 18H3'></path>
    </SvgIcon>
  );
}

export default React.memo(ListCheckIcon);
