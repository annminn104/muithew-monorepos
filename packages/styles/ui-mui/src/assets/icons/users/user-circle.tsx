import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='9' r='3' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5' />
    </SvgIcon>
  );
}

export default React.memo(UserCircleIcon);
