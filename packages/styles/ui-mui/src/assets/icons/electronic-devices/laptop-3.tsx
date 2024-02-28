import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Laptop3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414C4.672 15 5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 22h14a3 3 0 003-3v-1a1 1 0 00-1-1h-4.333a2 2 0 00-1.2.4l-.934.7a2 2 0 01-1.2.4h-2.666a2 2 0 01-1.2-.4l-.934-.7a2 2 0 00-1.2-.4H3a1 1 0 00-1 1v1a3 3 0 003 3z'
      />
    </SvgIcon>
  );
}

export default Laptop3Icon;
