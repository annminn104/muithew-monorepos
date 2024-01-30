import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WifiRouterRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 15a5 5 0 015-5h10a5 5 0 010 10H7a5 5 0 01-5-5z' />
      <path
        fill={linearColor}
        d='M18.33 22.335a.75.75 0 101.34-.67l-1.34.67zm-1-2l1 2 1.34-.67-1-2-1.34.67zM5.67 22.335a.75.75 0 11-1.34-.67l1.34.67zm1-2l-1 2-1.34-.67 1-2 1.34.67z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M8.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 15h6.5M21.583 5.397a5.502 5.502 0 00-10.167 0M19.38 6.658a3.001 3.001 0 00-5.76 0'
      />
      <path fill={linearColor} d='M17.5 7a1 1 0 11-2 0 1 1 0 012 0z' />
    </SvgIcon>
  );
}

export default React.memo(WifiRouterRoundIcon);
