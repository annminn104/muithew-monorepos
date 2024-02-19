import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortListIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 17h7M4 12h7M4 7h7' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 4v16m0-16l-3 4m3-4l3 4m-3 12l3-4m-3 4l-3-4' />
    </SvgIcon>
  );
}

export default React.memo(SortListIcon);
