import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GalleryEditIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
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
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18.562 2.935l.417-.417a1.77 1.77 0 012.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503L14.727 6.77c-.26.26-.39.39-.5.533a2.948 2.948 0 00-.338.545c-.078.164-.136.338-.252.686l-.372 1.116m7.8-4.212L17.23 9.273c-.26.26-.39.39-.533.5a2.946 2.946 0 01-.545.338c-.164.078-.338.136-.686.252l-1.116.372m0 0l-.722.24a.477.477 0 01-.604-.603l.241-.722m1.085 1.085L13.265 9.65'
      />
    </SvgIcon>
  );
}

export default GalleryEditIcon;
