import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WomenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M9.5 17.75a.75.75 0 000 1.5v-1.5zm5 1.5a.75.75 0 000-1.5v1.5zM11.25 22a.75.75 0 001.5 0h-1.5zm0-6v2.5h1.5V16h-1.5zm.75 1.75H9.5v1.5H12v-1.5zm2.5 0H12v1.5h2.5v-1.5zm-3.25.75V22h1.5v-3.5h-1.5z'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M19 9A7 7 0 115 9a7 7 0 0114 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(WomenIcon);
