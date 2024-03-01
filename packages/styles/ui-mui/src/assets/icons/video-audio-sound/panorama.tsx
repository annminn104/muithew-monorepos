import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PanoramaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M22 5.86c0-.795-.79-1.526-2.117-2.107-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86v12.717C22 20.467 17.523 22 12 22S2 20.467 2 18.576V5.86m20 0c0 1.195-1.789 2.247-4.5 2.86M2 5.86c0-.795.79-1.526 2.117-2.107C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86c0 1.196 1.789 2.248 4.5 2.86m0 0c1.578.357 3.468.564 5.5.564s3.922-.207 5.5-.564'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M19.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21 20l-2.496-2.149a2.405 2.405 0 00-2.889-.166l-.23.155a1.601 1.601 0 01-1.986-.164l-3.32-3.177a1.84 1.84 0 00-2.433-.078L6.29 15.557 2.5 19.102'
      />
    </SvgIcon>
  );
}

export default PanoramaIcon;
