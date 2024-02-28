import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Book2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 004 18.224' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 7h8M8 10.5h5M19.5 19H8' />
    </SvgIcon>
  );
}

export default Book2Icon;
