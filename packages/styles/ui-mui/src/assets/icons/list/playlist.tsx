import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlaylistIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M11 14H3M11 18H3' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18.875 14.118c1.654.955 2.48 1.433 2.602 2.122.03.172.03.348 0 .52-.121.69-.948 1.167-2.602 2.122-1.654.954-2.48 1.432-3.138 1.193a1.5 1.5 0 01-.451-.26c-.536-.45-.536-1.405-.536-3.315s0-2.864.536-3.314a1.5 1.5 0 01.451-.26c.657-.24 1.484.238 3.138 1.192z'
      />
    </SvgIcon>
  );
}

export default React.memo(PlaylistIcon);
