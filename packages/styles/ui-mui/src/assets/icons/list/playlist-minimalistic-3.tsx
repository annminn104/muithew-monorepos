import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlaylistMinimalistic3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 4H3M8 14H3M12 9H3' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429c0-1.42 1.12-2.572 2.5-2.572S16 16.008 16 17.43zm0 0V11'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1.001 1.001 0 00-.223.356c-.061.166-.061.355-.061.734 0 .877 0 1.315.191 1.578a1 1 0 00.63.395c.319.059.714-.13 1.504-.51l1.755-.842c.341-.164.512-.246.636-.373a1 1 0 00.223-.356C21 10.147 21 9.958 21 9.58c0-.877 0-1.315-.191-1.578a1 1 0 00-.63-.395c-.319-.059-.714.13-1.504.51z'
      />
    </SvgIcon>
  );
}

export default PlaylistMinimalistic3Icon;
