import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GameboyIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4.318 20.535C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.465C21 19.072 21 16.714 21 12s0-7.071-1.318-8.536C18.364 2 16.242 2 12 2 7.757 2 5.636 2 4.318 3.464 3 4.93 3 7.286 3 12c0 4.714 0 7.071 1.318 8.535z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 011.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 011.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 01-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 01-1.06-1.06C7 8.696 7 8.464 7 8z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8.5 14v3M7 15.5h3' />
      <path
        fill={linearColor}
        d='M16.333 13.833a.833.833 0 11-1.666 0 .833.833 0 011.666 0zM16.333 17.167a.833.833 0 11-1.666 0 .833.833 0 011.666 0zM14.667 15.5a.833.833 0 11-1.667 0 .833.833 0 011.667 0zM18 15.5a.833.833 0 11-1.667 0 .833.833 0 011.667 0z'
      />
    </SvgIcon>
  );
}

export default React.memo(GameboyIcon);
