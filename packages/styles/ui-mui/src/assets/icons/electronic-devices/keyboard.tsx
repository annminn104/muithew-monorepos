import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function KeyboardIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M7 9a1 1 0 11-2 0 1 1 0 012 0zM7 12a1 1 0 11-2 0 1 1 0 012 0zM10 12a1 1 0 11-2 0 1 1 0 012 0zM10 9a1 1 0 11-2 0 1 1 0 012 0zM13 9a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM16 9a1 1 0 11-2 0 1 1 0 012 0zM16 12a1 1 0 11-2 0 1 1 0 012 0zM19 9a1 1 0 11-2 0 1 1 0 012 0zM19 12a1 1 0 11-2 0 1 1 0 012 0z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 16h10' />
    </SvgIcon>
  );
}

export default React.memo(KeyboardIcon);
