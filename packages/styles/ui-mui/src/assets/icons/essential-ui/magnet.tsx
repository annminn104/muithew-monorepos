import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MagnetIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17 2h2.5A1.5 1.5 0 0121 3.5v2A1.5 1.5 0 0119.5 7H17m0-5h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4m0-20v5m0 0h-4a5 5 0 000 10h4m0 0h2.5a1.5 1.5 0 011.5 1.5v2a1.5 1.5 0 01-1.5 1.5H17m0-5v5'
      />
    </SvgIcon>
  );
}

export default MagnetIcon;
