import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WifiRouterMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21.583 7.397a5.502 5.502 0 00-10.167 0M19.38 8.658a3.001 3.001 0 00-5.76 0'
      />
      <path fill={linearColor} d='M7 16a1 1 0 11-2 0 1 1 0 012 0zM10 16a1 1 0 11-2 0 1 1 0 012 0z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 16c0-1.886 0-2.828.586-3.414C3.172 12 4.114 12 6 12h12c1.886 0 2.828 0 3.414.586C22 13.172 22 14.114 22 16c0 1.886 0 2.828-.586 3.414C20.828 20 19.886 20 18 20H6c-1.886 0-2.828 0-3.414-.586C2 18.828 2 17.886 2 16z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16.5 12V9' />
    </SvgIcon>
  );
}

export default React.memo(WifiRouterMinimalisticIcon);
