import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundGraphIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 013-7.141M5 12a7 7 0 107-7M12 16a4 4 0 000-8'
      />
    </SvgIcon>
  );
}

export default RoundGraphIcon;
