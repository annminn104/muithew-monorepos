import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SkipNextIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.66 9.353c1.787 1.154 1.787 4.14 0 5.294L5.87 21.614C4.135 22.736 2 21.276 2 18.968V5.033c0-2.31 2.134-3.769 3.87-2.648l10.79 6.968z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 5v14' />
    </SvgIcon>
  );
}

export default SkipNextIcon;
