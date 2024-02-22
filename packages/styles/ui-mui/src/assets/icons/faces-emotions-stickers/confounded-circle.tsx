import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ConfoundedCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 12l2-1.5L8 9M16 12l-2-1.5L16 9M16 16l-1.333-1-1.334 1L12 15l-1.333 1-1.334-1L8 16'
      />
    </SvgIcon>
  );
}

export default React.memo(ConfoundedCircleIcon);
