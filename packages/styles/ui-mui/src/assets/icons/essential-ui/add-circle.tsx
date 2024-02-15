import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AddCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 12h-3m0 0H9m3 0V9m0 3v3' />
    </SvgIcon>
  );
}

export default React.memo(AddCircleIcon);
