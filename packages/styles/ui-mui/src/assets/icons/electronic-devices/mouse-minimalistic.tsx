import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MouseMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M5 9a7 7 0 0114 0v6a7 7 0 11-14 0V9z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 5v3' />
    </SvgIcon>
  );
}

export default React.memo(MouseMinimalisticIcon);
