import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LockPasswordIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 10V8a6 6 0 1112 0v2' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 16h.009m3.982 0H12m3.991 0H16' />
    </SvgIcon>
  );
}

export default React.memo(LockPasswordIcon);
