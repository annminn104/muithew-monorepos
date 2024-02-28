import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DumbbellSmallIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 001.06 1.06c.191.052.424.052.889.052s.698 0 .888-.051a1.5 1.5 0 001.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 00-1.06-1.06C18.197 7 17.964 7 17.5 7s-.698 0-.888.051a1.5 1.5 0 00-1.06 1.06c-.052.192-.052.424-.052.889zM4.5 9v6c0 .465 0 .697.051.888a1.5 1.5 0 001.06 1.06c.192.052.424.052.889.052s.697 0 .888-.051a1.5 1.5 0 001.06-1.06c.052-.191.052-.424.052-.889V9c0-.465 0-.697-.051-.888a1.5 1.5 0 00-1.06-1.06C7.196 7 6.964 7 6.5 7s-.697 0-.888.051a1.5 1.5 0 00-1.06 1.06C4.5 8.304 4.5 8.536 4.5 9z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M5 10H4a2 2 0 100 4h1m4-2h6m4 2h1a2 2 0 100-4h-1' />
    </SvgIcon>
  );
}

export default DumbbellSmallIcon;
