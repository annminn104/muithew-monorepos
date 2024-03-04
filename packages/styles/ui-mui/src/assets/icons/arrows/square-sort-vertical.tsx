import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SquareSortVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z'
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path d='M9.5 8L9.5 16M9.5 16L7 13.25M9.5 16L12 13.25' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M14.5 16L14.5 8M14.5 8L12 10.75M14.5 8L17 10.75' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default SquareSortVerticalIcon;
