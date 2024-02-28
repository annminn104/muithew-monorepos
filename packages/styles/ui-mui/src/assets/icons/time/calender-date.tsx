import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CalenderDateIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 4V2.5M17 4V2.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 14.5l1.5-1.5v4' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 16v-2a1 1 0 112 0v2a1 1 0 11-2 0zM2.5 9h19' />
    </SvgIcon>
  );
}

export default CalenderDateIcon;
