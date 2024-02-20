import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SearchZoomInMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11.5' cy='11.5' r='9.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2' />
    </SvgIcon>
  );
}

export default React.memo(SearchZoomInMinimalisticIcon);
