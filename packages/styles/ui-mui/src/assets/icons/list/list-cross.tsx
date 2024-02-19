import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListCrossIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 18.5l5-5m0 5l-5-5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M11 14H3M11 18H3' />
    </SvgIcon>
  );
}

export default React.memo(ListCrossIcon);
