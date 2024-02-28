import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ThermometerIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17.096 10l1.3 1.3m-4.5 1.9l1.3 1.3m-4.51 1.909l1.301 1.3M5.58 20.558l.383-.384a2.014 2.014 0 011.647-.578l.799.09a3.02 3.02 0 002.47-.867l8.942-8.943a4.028 4.028 0 10-5.696-5.696L5.18 13.122a3.021 3.021 0 00-.866 2.47l.089.8a2.014 2.014 0 01-.578 1.646l-.384.383a1.51 1.51 0 002.137 2.137z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 15l6.5-6.5' />
    </SvgIcon>
  );
}

export default ThermometerIcon;
