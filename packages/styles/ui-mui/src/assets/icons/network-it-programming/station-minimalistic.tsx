import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StationMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M13.25 8.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.008 14A7.06 7.06 0 015 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 01-1.977 4.913m-8.035-1.963A4.236 4.236 0 017.8 9.055c0-2.338 1.88-4.233 4.2-4.233 2.32 0 4.2 1.895 4.2 4.233 0 1.13-.44 2.158-1.157 2.917'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16 22l-4-12-4 12' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14.5 17.5h-5' />
    </SvgIcon>
  );
}

export default React.memo(StationMinimalisticIcon);
