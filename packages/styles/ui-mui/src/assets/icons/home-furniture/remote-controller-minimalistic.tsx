import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RemoteControllerMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 9c0-2.809 0-4.213.674-5.222a4 4 0 011.104-1.104C7.787 2 9.19 2 12 2c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 01-1.104 1.104C16.213 22 14.81 22 12 22c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 01-1.104-1.104C5 19.213 5 17.81 5 15V9z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
      <circle cx='12' cy='5' r='1' fill={linearColor} />
      <circle cx='12' cy='17' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default RemoteControllerMinimalisticIcon;
