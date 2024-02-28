import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Login3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 16c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268C4.464 4.5 5.643 4.5 8 4.5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5' />
    </SvgIcon>
  );
}

export default Login3Icon;
