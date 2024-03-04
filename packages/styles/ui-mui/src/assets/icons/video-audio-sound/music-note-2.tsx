import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNote2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 18V2' />
      <circle cx='9' cy='18' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 8a6 6 0 01-6-6' />
    </SvgIcon>
  );
}

export default MusicNote2Icon;
