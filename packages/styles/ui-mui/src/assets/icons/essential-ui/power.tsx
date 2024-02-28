import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PowerIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2v4M8.5 3.706A9.003 9.003 0 0012 21a9 9 0 003.5-17.294' />
    </SvgIcon>
  );
}

export default PowerIcon;
