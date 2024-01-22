import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PieChartIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 15.552A9.215 9.215 0 0111.21 22 9.21 9.21 0 012 12.79 9.215 9.215 0 018.448 4'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21.913 9.947a11.352 11.352 0 00-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053z'
      />
    </SvgIcon>
  );
}

export default React.memo(PieChartIcon);
