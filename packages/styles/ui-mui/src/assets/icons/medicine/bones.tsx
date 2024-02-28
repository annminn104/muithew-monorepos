import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BonesIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.48 2.045v2.016c0 .556-.475.998-.96 1.272-.914.519-1.558 1.707-1.558 2.758a2.519 2.519 0 105.038 0 2.519 2.519 0 005.038 0c0-1.051-.644-2.24-1.559-2.758-.484-.274-.96-.716-.96-1.272V2.045M9.519 22v-2.015c0-.557-.476-.999-.96-1.273C7.643 18.194 7 17.006 7 15.954a2.519 2.519 0 115.038 0 2.519 2.519 0 015.038 0c0 1.052-.644 2.24-1.559 2.758-.484.274-.96.716-.96 1.273V22'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default BonesIcon;
