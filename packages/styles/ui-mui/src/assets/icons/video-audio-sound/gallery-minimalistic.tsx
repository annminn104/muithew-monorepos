import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GalleryMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <circle cx='16' cy='8' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 13.307l.81-.753a2.3 2.3 0 013.24.108l2.647 2.81c.539.572 1.42.649 2.049.18a2.317 2.317 0 012.986.181L19 18'
      />
    </SvgIcon>
  );
}

export default GalleryMinimalisticIcon;
