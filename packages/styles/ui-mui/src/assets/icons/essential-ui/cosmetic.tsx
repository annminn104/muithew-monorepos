import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CosmeticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M11 10.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16.5 20v-4m0 4h3m-3 0h-3' />
      <path
        fill={linearColor}
        d='M2 11v-.75a.75.75 0 00-.75.75H2zm6 0h.75a.75.75 0 00-.75-.75V11zm-6 .75h6v-1.5H2v1.5zM7.25 11v6h1.5v-6h-1.5zm-4.5 6v-6h-1.5v6h1.5zM5 19.25A2.25 2.25 0 012.75 17h-1.5A3.75 3.75 0 005 20.75v-1.5zM7.25 17A2.25 2.25 0 015 19.25v1.5A3.75 3.75 0 008.75 17h-1.5z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M3 11h4V5.618a1 1 0 00-1.447-.894l-2 1A1 1 0 003 6.618V11z' />
    </SvgIcon>
  );
}

export default React.memo(CosmeticIcon);
