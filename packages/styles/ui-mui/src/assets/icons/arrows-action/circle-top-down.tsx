import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CircleTopDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M21 3l-9 9m0 0h5.344M12 12V6.656' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10' />
    </SvgIcon>
  );
}

export default CircleTopDownIcon;
