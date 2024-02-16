import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TrafficEconomyIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 12A10 10 0 1112 2M15 12h-3m0 0H9m3 0V9m0 3v3M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185'
      />
    </SvgIcon>
  );
}

export default React.memo(TrafficEconomyIcon);
