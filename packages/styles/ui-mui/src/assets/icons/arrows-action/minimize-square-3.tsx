import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MinimizeSquare3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2.001 11'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17 7l-5 5m0 0h3.75M12 12V8.25' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 18c0-1.886 0-2.828.586-3.414C3.172 14 4.114 14 6 14c1.886 0 2.828 0 3.414.586C10 15.172 10 16.114 10 18c0 1.886 0 2.828-.586 3.414C8.828 22 7.886 22 6 22c-1.886 0-2.828 0-3.414-.586C2 20.828 2 19.886 2 18z'
      />
    </SvgIcon>
  );
}

export default MinimizeSquare3Icon;
