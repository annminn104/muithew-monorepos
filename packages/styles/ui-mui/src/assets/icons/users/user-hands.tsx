import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserHandsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-5m-8 0c-1.71 0-3.15 1.28-3.35 2.98L4 21.5M16 13c1.71 0 3.15 1.28 3.35 2.98L20 21.5'
      />
      <circle cx='12' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default UserHandsIcon;
