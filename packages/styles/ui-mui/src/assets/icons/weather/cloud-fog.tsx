import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CloudFogIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.381 7.027a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a4.356 4.356 0 00-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .82.236 1.586.645 2.235m4.471-6.391a5.576 5.576 0 01-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 011.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 1.39-.508 2.663-1.351 3.647'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 22h8M5 19h14M2 16h20' />
    </SvgIcon>
  );
}

export default CloudFogIcon;
