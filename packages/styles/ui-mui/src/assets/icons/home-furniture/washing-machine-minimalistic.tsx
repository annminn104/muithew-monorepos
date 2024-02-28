import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WashingMachineMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M17 14a5 5 0 11-10 0 5 5 0 0110 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 6h8M7.234 14.362c.855.428 1.833 1.159 3.49 1.457 2.362.426 2.126-1.648 4.488-1.223.72.13 1.206.35 1.55.585'
      />
    </SvgIcon>
  );
}

export default WashingMachineMinimalisticIcon;
