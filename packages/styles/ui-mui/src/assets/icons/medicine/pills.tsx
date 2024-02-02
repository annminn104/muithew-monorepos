import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PillsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.252 2.563a5.437 5.437 0 01-7.688 0l-5.127-5.126a5.437 5.437 0 117.69-7.689l5.125 5.126a5.437 5.437 0 010 7.69z'
      ></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14.5 6.5L13 5'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M6.73 10.135a6 6 0 107.143 7.098'></path>
    </SvgIcon>
  );
}

export default React.memo(PillsIcon);
