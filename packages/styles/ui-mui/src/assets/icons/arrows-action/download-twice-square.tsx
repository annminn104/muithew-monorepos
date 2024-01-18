import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DownloadTwiceSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.5 7v7m0 0l2.5-3m-2.5 3L6 11M15.5 7v7m0 0l2.5-3m-2.5 3L13 11'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 17H6' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default React.memo(DownloadTwiceSquareIcon);
