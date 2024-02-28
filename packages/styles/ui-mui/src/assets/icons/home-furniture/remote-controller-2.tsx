import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RemoteController2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 9a3 3 0 11-6 0 3 3 0 016 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5' />
    </SvgIcon>
  );
}

export default RemoteController2Icon;
