import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DangerCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 7v6' />
      <circle cx='12' cy='16' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default DangerCircleIcon;
