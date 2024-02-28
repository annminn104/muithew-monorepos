import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DollarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5'></circle>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 6v12M15 9.5C15 8.12 13.657 7 12 7S9 8.12 9 9.5s1.343 2.5 3 2.5 3 1.12 3 2.5-1.343 2.5-3 2.5-3-1.12-3-2.5'
      ></path>
    </SvgIcon>
  );
}

export default DollarIcon;
