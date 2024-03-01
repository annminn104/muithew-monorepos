import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GalleryDownloadIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 12.5l1.752-1.533a2.3 2.3 0 013.14.105l4.29 4.29a2 2 0 002.564.222l.299-.21a3 3 0 013.731.225L21 18.5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 11V2m0 9l3-3m-3 3l-3-3' />
    </SvgIcon>
  );
}

export default GalleryDownloadIcon;
