import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TransmissionCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 9v6M12 9v6M8 12h5c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C16 10.398 16 9.932 16 9'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' />
    </SvgIcon>
  );
}

export default TransmissionCircleIcon;
