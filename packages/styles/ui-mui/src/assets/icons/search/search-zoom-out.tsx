import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SearchZoomOutIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11.5' cy='11.5' r='9.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18.5 18.5L22 22M9 11.5h5' />
    </SvgIcon>
  );
}

export default SearchZoomOutIcon;
