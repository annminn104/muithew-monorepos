import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Safe2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      ></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 11c0-2.828 0-4.243.879-5.121C6.757 5 8.172 5 11 5h2c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11v2c0 2.828 0 4.243-.879 5.121C17.243 19 15.828 19 13 19h-2c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13v-2z'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M8 12a4 4 0 118 0 4 4 0 01-8 0z'></path>
      <path fill={linearColor} d='M13.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 12V8M12 12l3.5 1.5M12 12l-3.5 1.5'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4.5 7v3M4.5 14v3'></path>
    </SvgIcon>
  );
}

export default React.memo(Safe2Icon);
