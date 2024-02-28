import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SpecialEffectsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path
        fill={linearColor}
        d='M6 8v-.75a.75.75 0 00-.75.75H6zm4 .75a.75.75 0 000-1.5v1.5zm0 4a.75.75 0 000-1.5v1.5zm8.6-4.3a.75.75 0 10-1.2-.9l1.2.9zm-7.2 7.1a.75.75 0 101.2.9l-1.2-.9zm1.2-8a.75.75 0 10-1.2.9l1.2-.9zm4.8 8.9a.75.75 0 101.2-.9l-1.2.9zM5.25 16a.75.75 0 001.5 0h-1.5zM6 8.75h4v-1.5H6v1.5zm0 4h4v-1.5H6v1.5zm11.4-5.2l-3 4 1.2.9 3-4-1.2-.9zm-3 4l-3 4 1.2.9 3-4-1.2-.9zm-3-3.1l3 4 1.2-.9-3-4-1.2.9zm3 4l3 4 1.2-.9-3-4-1.2.9zM5.25 8v4h1.5V8h-1.5zm0 4v4h1.5v-4h-1.5z'
      />
    </SvgIcon>
  );
}

export default SpecialEffectsIcon;
