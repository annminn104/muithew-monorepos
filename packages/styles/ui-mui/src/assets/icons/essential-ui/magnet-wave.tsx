import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MagnetWaveIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.444 3H16.5A1.5 1.5 0 0118 4.5V6a1.5 1.5 0 01-1.5 1.5h-2.056m0-4.5H11a9 9 0 100 18h3.444m0-18v4.5m0 0h-3.5a4.5 4.5 0 000 9h3.5m0 0H16.5A1.5 1.5 0 0118 18v1.5a1.5 1.5 0 01-1.5 1.5h-2.056m0-4.5V21'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21.5 6S23 7.8 23 12s-1.5 6-1.5 6M19.5 9s.5.9.5 3-.5 3-.5 3' />
    </SvgIcon>
  );
}

export default MagnetWaveIcon;
