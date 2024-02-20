import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function History2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 9v4h4' />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeDasharray='0.5 3.5' strokeLinecap='round' strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(History2Icon);
