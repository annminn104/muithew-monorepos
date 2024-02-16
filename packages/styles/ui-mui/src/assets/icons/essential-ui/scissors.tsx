import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ScissorsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.401 20.5L6 2m16 17a3 3 0 11-6 0 3 3 0 016 0zM7.599 20.5L18 2M2 19a3 3 0 106 0 3 3 0 00-6 0z'
      />
    </SvgIcon>
  );
}

export default React.memo(ScissorsIcon);
