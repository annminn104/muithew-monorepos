import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SquareSortHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z'
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path d='M16 9.5L8 9.5M8 9.5L10.75 7M8 9.5L10.75 12' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M8 14.5L16 14.5M16 14.5L13.25 12M16 14.5L13.25 17'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default SquareSortHorizontalIcon;
