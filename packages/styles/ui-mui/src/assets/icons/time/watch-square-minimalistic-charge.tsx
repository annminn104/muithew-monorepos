import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WatchSquareMinimalisticChargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 12c0-2.809 0-4.213.674-5.222a4 4 0 011.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 01-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 01-1.104-1.104C5 16.213 5 14.81 5 12z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12.857 9L10 12h4l-2.857 3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 2h10M7 22h10' />
    </SvgIcon>
  );
}

export default WatchSquareMinimalisticChargeIcon;
