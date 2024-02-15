import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ForbiddenCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18.5 5.5l-13 13' />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(ForbiddenCircleIcon);
