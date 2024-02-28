import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TuningSquare2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M10 14a2 2 0 110 4 2 2 0 010-4z' />
      <circle cx='2' cy='2' r='2' stroke={linearColor} strokeWidth='1.5' transform='matrix(0 -1 -1 0 16 10)' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14 16h5M10 8H5M5 16h1M19 8h-1' />
    </SvgIcon>
  );
}

export default TuningSquare2Icon;
