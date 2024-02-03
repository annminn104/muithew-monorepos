import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MapPointIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 01-2.926 0C6.553 19.812 4 14.605 4 10.144z'
      />
      <circle cx='12' cy='10' r='3' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(MapPointIcon);
