import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortFromTopToBottomIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 16h9M6 11h7M8 6h5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 4v16l3-4' />
    </SvgIcon>
  );
}

export default SortFromTopToBottomIcon;
