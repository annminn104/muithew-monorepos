import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SidebarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M5.5 10h6M6.5 14h4M15 21V3' />
    </SvgIcon>
  );
}

export default SidebarIcon;
