import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UsbIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='20' r='2' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='6' cy='6' r='1' stroke={linearColor} strokeWidth='1.5' />
      <path
        fill={linearColor}
        d='M11.25 18a.75.75 0 001.5 0h-1.5zM12 2l.624-.416a.75.75 0 00-1.248 0L12 2zm1.376 3.416a.75.75 0 101.248-.832l-1.248.832zm-4-.832a.75.75 0 001.248.832l-1.248-.832zm2-2.168l2 3 1.248-.832-2-3-1.248.832zm0-.832l-2 3 1.248.832 2-3-1.248-.832zM12.75 18v-3h-1.5v3h1.5zm0-3V2h-1.5v13h1.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 7v2.558a2 2 0 001.368 1.898l3.264 1.088A2 2 0 0112 14.441V15M18 10v2.559a2 2 0 01-1.367 1.897l-3.265 1.088A2 2 0 0012 17.442V18'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9z'
      />
    </SvgIcon>
  );
}

export default React.memo(UsbIcon);
