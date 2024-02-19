import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortByTimeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 7H2M8 12H2M10 17H2'></path>
      <circle cx='17' cy='12' r='5' stroke={linearColor} strokeWidth='1.5'></circle>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 10v1.846L18 13'></path>
    </SvgIcon>
  );
}

export default React.memo(SortByTimeIcon);
