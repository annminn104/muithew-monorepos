import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SSDRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21.553 15.481L19 5.118C18.5 3.529 17.605 3 16.5 3h-9c-1.105 0-2 .53-2.5 2.118L2.447 15.48m19.106 0c-.6-1.13-1.742-1.893-3.053-1.893h-13c-1.311 0-2.454.764-3.053 1.893m19.106 0A3.86 3.86 0 0122 17.294C22 19.341 20.433 21 18.5 21h-13C3.567 21 2 19.34 2 17.294c0-.658.162-1.277.447-1.813'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 17v1M15.5 17v1M13 17v1M10.5 17v1' />
    </SvgIcon>
  );
}

export default SSDRoundIcon;
