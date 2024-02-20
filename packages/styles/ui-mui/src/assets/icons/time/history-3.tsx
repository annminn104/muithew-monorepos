import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function History3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeDasharray='0.5 3.5'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 12c0-5.523-4.477-10-10-10' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 9v4h4' />
    </SvgIcon>
  );
}

export default React.memo(History3Icon);
