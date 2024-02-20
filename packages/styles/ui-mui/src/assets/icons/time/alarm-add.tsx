import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlarmAddIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='13' r='9' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 13h-3m0 0H9m3 0v-3m0 3v3' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3.5 4.5l4-2.5M20.5 4.5l-4-2.5' />
    </SvgIcon>
  );
}

export default React.memo(AlarmAddIcon);
