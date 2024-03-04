import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function QuitFullScreenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M14 22C14 18.2288 14 16.3431 15.1716 15.1716C16.3431 14 18.2288 14 22 14'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
      />
      <path
        d='M2 14C5.77124 14 7.65685 14 8.82843 15.1716C10 16.3431 10 18.2288 10 22'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
      />
      <path d='M2 10C5.77124 10 7.65685 10 8.82843 8.82843C10 7.65685 10 5.77124 10 2' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' />
      <path
        d='M22 10C18.2288 10 16.3431 10 15.1716 8.82843C14 7.65685 14 5.77124 14 2'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </SvgIcon>
  );
}

export default QuitFullScreenIcon;
