import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function InfinityIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 8a5 5 0 10-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 11-3 9' />
    </SvgIcon>
  );
}

export default InfinityIcon;
