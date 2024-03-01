import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PauseCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 9.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 01-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 01-.54-.541C8 15.199 8 14.966 8 14.5v-5zM13 9.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 01-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 01-.54-.541C13 15.199 13 14.966 13 14.5v-5z'
      />
    </SvgIcon>
  );
}

export default PauseCircleIcon;
