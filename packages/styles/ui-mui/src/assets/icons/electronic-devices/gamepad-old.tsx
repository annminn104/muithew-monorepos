import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GamepadOldIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <g clipPath='url(#clip0_9754_6666)'>
        <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 10v4m-2-2h4' />
        <path fill={linearColor} d='M16 10.5a1 1 0 11-2 0 1 1 0 012 0zM18 13.5a1 1 0 11-2 0 1 1 0 012 0z' />
        <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 4V3a1 1 0 011-1h1a1 1 0 001-1V0' />
        <path
          stroke={linearColor}
          strokeWidth='1.5'
          d='M2 12c0-2.8 0-4.2.545-5.27A5 5 0 014.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185C22 7.8 22 9.2 22 12c0 2.8 0 4.2-.545 5.27a5 5 0 01-2.185 2.185C18.2 20 16.8 20 14 20h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 01-2.185-2.185C2 16.2 2 14.8 2 12z'
        />
      </g>
      <defs>
        <clipPath id='clip0_9754_6666'>
          <path fill='#fff' d='M0 0H24V24H0z' />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default React.memo(GamepadOldIcon);
