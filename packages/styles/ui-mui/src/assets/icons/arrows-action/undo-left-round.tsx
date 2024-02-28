import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoLeftRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M7 4L4 7l3 3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 7h11a5 5 0 010 10H8' />
    </SvgIcon>
  );
}

export default UndoLeftRoundIcon;
