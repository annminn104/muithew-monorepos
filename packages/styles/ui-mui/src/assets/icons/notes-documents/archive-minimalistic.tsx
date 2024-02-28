import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArchiveMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 14c0-2.8 0-4.2.545-5.27A5 5 0 014.73 6.545C5.8 6 7.2 6 10 6h4c2.8 0 4.2 0 5.27.545a5 5 0 012.185 2.185C22 9.8 22 11.2 22 14c0 2.8 0 4.2-.545 5.27a5 5 0 01-2.185 2.185C18.2 22 16.8 22 14 22h-4c-2.8 0-4.2 0-5.27-.545a5 5 0 01-2.185-2.185C2 18.2 2 16.8 2 14z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9.5 14.4l1.429 1.6 3.571-4' />
    </SvgIcon>
  );
}

export default ArchiveMinimalisticIcon;
