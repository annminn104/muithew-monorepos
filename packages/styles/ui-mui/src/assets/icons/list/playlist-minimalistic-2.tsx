import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlaylistMinimalistic2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 6H3M13 10H3M9 14H3M8 18H3M17 16.5V8' />
      <circle cx='14.5' cy='16.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 12a4 4 0 01-4-4' />
    </SvgIcon>
  );
}

export default PlaylistMinimalistic2Icon;
