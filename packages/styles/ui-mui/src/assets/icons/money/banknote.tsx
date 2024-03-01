import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BanknoteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 01-1.104-1.104C2 16.213 2 14.81 2 12c0-2.809 0-4.213.674-5.222a4 4 0 011.104-1.104C4.787 5 6.19 5 9 5h6c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C22 7.787 22 9.19 22 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 01-1.104 1.104C19.213 19 17.81 19 15 19H9z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 9a3 3 0 110 6 3 3 0 010-6z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M5.5 15V9M18.5 15V9' />
    </SvgIcon>
  );
}

export default BanknoteIcon;
