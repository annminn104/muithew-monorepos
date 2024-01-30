import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Tuning2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M9.5 14a3 3 0 110 6 3 3 0 010-6zM14.5 4a3 3 0 100 6 3 3 0 000-6z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 16.959h7M9 6.958H2M2 16.959h2M22 6.958h-2' />
    </SvgIcon>
  );
}

export default React.memo(Tuning2Icon);
