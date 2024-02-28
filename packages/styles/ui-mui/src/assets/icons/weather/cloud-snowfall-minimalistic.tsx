import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CloudSnowfallMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='18' r='1' fill={linearColor} />
      <circle cx='12' cy='21' r='1' fill={linearColor} />
      <path
        fill={linearColor}
        d='M16 19.5a1 1 0 11-2 0 1 1 0 012 0zM16 16.5a1 1 0 11-2 0 1 1 0 012 0zM10 19.5a1 1 0 11-2 0 1 1 0 012 0zM10 16.5a1 1 0 11-2 0 1 1 0 012 0z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.286 19C3.919 19 2 17.104 2 14.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a5.577 5.577 0 01-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 011.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.707-1.927 4.97-4.5 5.52'
      />
    </SvgIcon>
  );
}

export default CloudSnowfallMinimalisticIcon;
