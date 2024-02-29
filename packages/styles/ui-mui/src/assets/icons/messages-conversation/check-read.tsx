import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CheckReadIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4 12.9l3.143 3.6L15 7.5M20 7.563l-8.572 9L11 16'
      ></path>
    </SvgIcon>
  );
}

export default CheckReadIcon;
