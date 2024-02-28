import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SearchBugIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11.5' cy='11.5' r='9.5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.5 15.5a3 3 0 01-3-3v-2m3 5a3 3 0 003-3v-2m-3 5v-5m3 0a3 3 0 10-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5M18.5 18.5L22 22'
      />
    </SvgIcon>
  );
}

export default SearchBugIcon;
