import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HamburgerMenuIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 7H4M20 12H4M20 17H4' />
    </SvgIcon>
  );
}

export default HamburgerMenuIcon;
