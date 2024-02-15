import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function InfoCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 17v-6' />
      <circle cx='1' cy='1' r='1' fill={linearColor} transform='matrix(1 0 0 -1 11 9)' />
    </SvgIcon>
  );
}

export default React.memo(InfoCircleIcon);
