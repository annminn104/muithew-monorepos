import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CloudStorageIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 01-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 011.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8.5 17c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v2c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M11 18h2' />
    </SvgIcon>
  );
}

export default CloudStorageIcon;
