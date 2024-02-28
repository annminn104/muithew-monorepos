import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GiftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 12H2M12 2v20M13 12a4 4 0 004 4M11 12a4 4 0 01-4 4' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 10.035a3.247 3.247 0 012.46-3.15c1.603-.4 3.056 1.052 2.655 2.656A3.247 3.247 0 0113.965 12H12v-1.965zM12 10.035a3.247 3.247 0 00-2.46-3.15c-1.603-.4-3.056 1.052-2.655 2.656A3.247 3.247 0 0010.035 12H12v-1.965z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default GiftIcon;
