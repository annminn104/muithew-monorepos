import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartSpeakerMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.321 6.658a4.833 4.833 0 013.918-4.197l.215-.04a24.736 24.736 0 019.091 0l.323.06a4.701 4.701 0 013.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 01-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 01-5.169 0 51.167 51.167 0 01-.99-.118l-1.015-.126a4.714 4.714 0 01-4.105-4.137 46.932 46.932 0 010-10.689l.016-.137z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6'></path>
    </SvgIcon>
  );
}

export default React.memo(SmartSpeakerMinimalisticIcon);
