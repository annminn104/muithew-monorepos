import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TransmissionSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 9v6M12 9v6M8 12h5c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083C16 10.398 16 9.932 16 9'
      />
      <rect width='20' height='20' x='2' y='2' stroke={linearColor} strokeWidth='1.5' rx='5' />
    </SvgIcon>
  );
}

export default React.memo(TransmissionSquareIcon);
