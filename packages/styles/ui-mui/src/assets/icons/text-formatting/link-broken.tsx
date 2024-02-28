import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkBrokenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 8l6 2M6 4l2 3M11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517 1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552-1.67-1.828-1.897-4.546-.504-6.07L6.173 12'
      />
    </SvgIcon>
  );
}

export default LinkBrokenIcon;
