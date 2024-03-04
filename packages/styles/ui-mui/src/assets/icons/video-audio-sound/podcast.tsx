import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PodcastIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M9 10a3 3 0 116 0v3a3 3 0 11-6 0v-3z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 10h2M13 13h2M9 10h1m-1 3h1' />
      <path stroke={linearColor} strokeWidth='1.5' d='M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 0112 0v4.154c0 1.02.826 1.846 1.846 1.846' />
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12a2 2 0 114 0v2a2 2 0 11-4 0v-2zM18 12a2 2 0 114 0v2a2 2 0 11-4 0v-2z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 16v3' />
    </SvgIcon>
  );
}

export default PodcastIcon;
