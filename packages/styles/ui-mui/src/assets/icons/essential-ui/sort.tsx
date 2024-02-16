import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 7H2M19 12H5M16 17H8' />
    </SvgIcon>
  );
}

export default React.memo(SortIcon);
