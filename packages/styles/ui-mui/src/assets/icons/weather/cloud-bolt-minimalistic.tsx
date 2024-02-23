import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CloudBoltMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.286 18C3.919 18 2 16.104 2 13.765c0-2.34 1.919-4.236 4.286-4.236.284 0 .562.028.83.08m7.265-2.582a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.576 5.576 0 01-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.29 4.29 0 011.55.634m9.49-3.228C20.392 7.78 22 9.881 22 12.353c0 2.707-1.927 4.97-4.5 5.52'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M10 22l4.286-3.692H10l4.286-3.693'></path>
    </SvgIcon>
  );
}

export default React.memo(CloudBoltMinimalisticIcon);
