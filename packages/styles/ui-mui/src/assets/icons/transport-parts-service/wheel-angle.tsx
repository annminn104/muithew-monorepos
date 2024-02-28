import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WheelAngleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.5 22c2.485 0 4.5-4.477 4.5-10S18.985 2 16.5 2M12 12c0 5.523-2.015 10-4.5 10S3 17.523 3 12 5.015 2 7.5 2 12 6.477 12 12z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M7.5 22c2.485 0 4.5-4.477 4.5-10S9.985 2 7.5 2' />
      <path stroke={linearColor} strokeWidth='1.5' d='M9 12c0 3.314-.672 6-1.5 6S6 15.314 6 12s.672-6 1.5-6S9 8.686 9 12zM7.5 2h9M7.5 22h9' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 12H8' />
    </SvgIcon>
  );
}

export default WheelAngleIcon;
