import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListArrowUpMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M11 11H3M12 16H3'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8'></path>
    </SvgIcon>
  );
}

export default React.memo(ListArrowUpMinimalisticIcon);
