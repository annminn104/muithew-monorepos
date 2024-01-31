import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WashingMachineIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 22v-1M18 22v-1' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v3c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-3z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3 9h18' />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 15a3 3 0 11-6 0 3 3 0 016 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6.5 5.5h3' />
      <path fill={linearColor} d='M15.5 5.5a1 1 0 11-2 0 1 1 0 012 0zM18.5 5.5a1 1 0 11-2 0 1 1 0 012 0z' />
    </SvgIcon>
  );
}

export default React.memo(WashingMachineIcon);
