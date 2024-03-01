import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VinylRecordIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.929 19.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7.404 16.597a6.5 6.5 0 010-9.193m9.192 0a6.5 6.5 0 010 9.193' />
    </SvgIcon>
  );
}

export default VinylRecordIcon;
