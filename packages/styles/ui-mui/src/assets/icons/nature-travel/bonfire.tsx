import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BonfireIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18 8.807C18 13.761 13.733 15 11.6 15 9.733 15 6 13.761 6 8.807 6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523.178 1.245 1.305 2.173 1.987 1.104.582-.914.793-2.148.793-2.891 0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 15L4 22M4 15l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2' />
    </SvgIcon>
  );
}

export default BonfireIcon;
