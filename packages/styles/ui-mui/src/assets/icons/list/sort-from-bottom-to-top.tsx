import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortFromBottomToTopIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 8h9M6 13h7M8 18h5'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 20V4l3 4'></path>
    </SvgIcon>
  );
}

export default React.memo(SortFromBottomToTopIcon);
