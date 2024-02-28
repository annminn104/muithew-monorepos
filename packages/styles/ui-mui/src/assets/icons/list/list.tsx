import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 7H4M15 12H4M9 17H4' />
    </SvgIcon>
  );
}

export default ListIcon;
