import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7 4L4 7l3 3' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4 7h11c1.87 0 2.804 0 3.5.402A3 3 0 0119.598 8.5C20 9.196 20 10.13 20 12s0 2.804-.402 3.5a3 3 0 01-1.098 1.098C17.804 17 16.87 17 15 17H8'
      />
    </SvgIcon>
  );
}

export default UndoLeftIcon;
