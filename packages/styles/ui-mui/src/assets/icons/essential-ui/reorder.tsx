import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ReorderIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 10H5M19 14H5M19 6H5M19 18H5' />
    </SvgIcon>
  );
}

export default React.memo(ReorderIcon);
