import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 4l3 3-3 3' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 7H9c-1.87 0-2.804 0-3.5.402A3 3 0 004.402 8.5C4 9.196 4 10.13 4 12s0 2.804.402 3.5A3 3 0 005.5 16.598C6.196 17 7.13 17 9 17h7'
      />
    </SvgIcon>
  );
}

export default React.memo(UndoRightIcon);
