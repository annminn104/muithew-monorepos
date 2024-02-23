import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Laptop2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 20h14a3 3 0 003-3v-1a1 1 0 00-1-1h-4.333a2 2 0 00-1.2.4l-.934.7a2 2 0 01-1.2.4h-2.666a2 2 0 01-1.2-.4l-.934-.7a2 2 0 00-1.2-.4H3a1 1 0 00-1 1v1a3 3 0 003 3z'
      />
    </SvgIcon>
  );
}

export default React.memo(Laptop2Icon);
