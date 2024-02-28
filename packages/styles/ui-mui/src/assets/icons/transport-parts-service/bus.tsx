import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BusIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4 13h16M15.5 16H17M7 16h1.5M6 19.5V21a1 1 0 001 1h1.5a1 1 0 001-1v-1M18 19.5V21a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1M20 9h1a1 1 0 011 1v1a1 1 0 01-.4.8L20 13M4 9H3a1 1 0 00-1 1v1a1 1 0 00.4.8L4 13'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19.5 5h-15' />
    </SvgIcon>
  );
}

export default BusIcon;
