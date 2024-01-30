import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WifiRouterIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path fill={linearColor} d='M7 15a1 1 0 11-2 0 1 1 0 012 0zM10 15a1 1 0 11-2 0 1 1 0 012 0z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 15c0-1.886 0-2.828.586-3.414C3.172 11 4.114 11 6 11h12c1.886 0 2.828 0 3.414.586C22 12.172 22 13.114 22 15c0 1.886 0 2.828-.586 3.414C20.828 19 19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586C2 17.828 2 16.886 2 15z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7 11L3 4M17 11l4-7M14 15h4M17.167 5.397A5.502 5.502 0 007 5.397M14.965 6.658a3.001 3.001 0 00-5.76 0'
      />
      <path fill={linearColor} d='M13.084 7a1 1 0 11-2 0 1 1 0 012 0z' />
    </SvgIcon>
  );
}

export default React.memo(WifiRouterIcon);
