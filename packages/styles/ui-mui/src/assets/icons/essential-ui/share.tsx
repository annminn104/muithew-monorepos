import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M9 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14 6.5L9 10M14 17.5L9 14' />
      <path stroke={linearColor} strokeWidth='1.5' d='M19 18.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM19 5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
    </SvgIcon>
  );
}

export default ShareIcon;
