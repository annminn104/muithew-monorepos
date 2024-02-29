import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DialogIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M10 22a8 8 0 10-7.22-4.55c.172.36.232.766.13 1.15l-.328 1.227a1.3 1.3 0 001.591 1.591L5.4 21.09a1.671 1.671 0 011.15.13c1.045.5 2.215.78 3.451.78z'
      ></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18 14.502a6.45 6.45 0 00.198-.087c.362-.165.768-.227 1.153-.124l.476.127a1.3 1.3 0 001.591-1.591l-.127-.476c-.103-.385-.04-.791.125-1.153A6.5 6.5 0 109.5 5.996'
      ></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6.518 14h.01m3.481 0h.009m3.482 0h.009'></path>
    </SvgIcon>
  );
}

export default DialogIcon;
