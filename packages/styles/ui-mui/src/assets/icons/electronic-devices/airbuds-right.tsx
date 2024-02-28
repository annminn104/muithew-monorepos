import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21 18.667v.833c0 .14 0 .209-.003.268a2.35 2.35 0 01-2.23 2.229C18.71 22 18.64 22 18.5 22c-.14 0-.209 0-.268-.003a2.35 2.35 0 01-2.229-2.23C16 19.71 16 19.64 16 19.5v-.833m5 0V7.559A5.588 5.588 0 0015.44 2H15.336A3.353 3.353 0 0012 5.336V8a3 3 0 003 3 1 1 0 011 1v6.667m5 0h-5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.676' d='M15 5v3' />
      <circle cx='7.5' cy='16.5' r='5.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 5.1A5.006 5.006 0 005.1 9' />
      <path
        fill={linearColor}
        d='M6 14v-.75a.75.75 0 00-.75.75H6zm-.75 5a.75.75 0 001.5 0h-1.5zM6 16.5h-.75v.75H6v-.75zm2.357 2.886a.75.75 0 101.286-.772l-1.286.772zM6 14.75h1.5v-1.5H6v1.5zm.75 1.75V14h-1.5v2.5h1.5zm1.5-1.25c0 .154-.202.5-.75.5v1.5c1.109 0 2.25-.773 2.25-2h-1.5zm-.75-.5c.548 0 .75.346.75.5h1.5c0-1.227-1.141-2-2.25-2v1.5zM5.25 14v5h1.5v-5h-1.5zm2.25 1.75H6v1.5h1.5v-1.5zm-.643 1.136l1.5 2.5 1.286-.772-1.5-2.5-1.286.772z'
      />
    </SvgIcon>
  );
}

export default AirbudsRightIcon;
