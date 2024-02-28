import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartHomeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14 22c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.52c0-2.29 0-3.434-.52-4.382-.518-.949-1.467-1.537-3.364-2.715l-2-1.24C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.623-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823c-.317.58-.44 1.234-.489 2.177M11 22a9 9 0 00-9-9M8 22a6 6 0 00-6-6M5 22a3 3 0 00-3-3'
      />
    </SvgIcon>
  );
}

export default SmartHomeIcon;
