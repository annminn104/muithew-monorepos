import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UsbSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='17' r='1' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='8' cy='9' r='1' stroke={linearColor} strokeWidth='1.5' />
      <path
        fill={linearColor}
        d='M11.25 16a.75.75 0 001.5 0h-1.5zM12 6l.53-.53a.75.75 0 00-1.06 0L12 6zm.47 1.53a.75.75 0 101.06-1.06l-1.06 1.06zm-2-1.06a.75.75 0 001.06 1.06l-1.06-1.06zm1 .06l1 1 1.06-1.06-1-1-1.06 1.06zm0-1.06l-1 1 1.06 1.06 1-1-1.06-1.06zM12.75 16v-1.875h-1.5V16h1.5zm0-1.875V6h-1.5v8.125h1.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 10v1.03a2 2 0 001.403 1.909l1.404.438A1.7 1.7 0 0112 15M16 11v1.03a2 2 0 01-1.403 1.909l-1.404.438A1.7 1.7 0 0012 16'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15 10c0-.471 0-.707.146-.854C15.293 9 15.53 9 16 9s.707 0 .854.146C17 9.293 17 9.53 17 10s0 .707-.146.854C16.707 11 16.47 11 16 11s-.707 0-.854-.146C15 10.707 15 10.47 15 10z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default React.memo(UsbSquareIcon);
