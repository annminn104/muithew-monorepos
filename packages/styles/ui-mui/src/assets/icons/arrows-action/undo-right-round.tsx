import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoRightRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 4l3 3-3 3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 7H9a5 5 0 100 10h7' />
    </SvgIcon>
  );
}

export default UndoRightRoundIcon;
