import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SkipPreviousIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7.34 9.353c-1.787 1.154-1.787 4.14 0 5.294l10.79 6.967c1.736 1.122 3.87-.338 3.87-2.647V5.033c0-2.31-2.134-3.769-3.87-2.648L7.34 9.353z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 5v14' />
    </SvgIcon>
  );
}

export default SkipPreviousIcon;
