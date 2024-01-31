import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MirrorIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M5 9.5V19a3 3 0 01-.6 1.8L3.5 22M19 9.5V19a3 3 0 00.6 1.8l.9 1.2' />
      <path stroke={linearColor} strokeWidth='1.5' d='M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5C6 5.358 8.686 2 12 2s6 3.358 6 7.5zM5 20h14' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 5.256c.96.51 1.697 1.732 1.926 3.244' />
    </SvgIcon>
  );
}

export default React.memo(MirrorIcon);
