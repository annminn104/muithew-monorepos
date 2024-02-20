import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StopwatchPauseIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='13' r='9' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 10.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C8.801 9 9.034 9 9.5 9s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 01-.541.54C10.199 17 9.966 17 9.5 17s-.699 0-.883-.076a1 1 0 01-.54-.541C8 16.199 8 15.966 8 15.5v-5zM13 10.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C13.801 9 14.034 9 14.5 9s.699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 01-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 01-.54-.541C13 16.199 13 15.966 13 15.5v-5z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 2h4' />
    </SvgIcon>
  );
}

export default React.memo(StopwatchPauseIcon);
