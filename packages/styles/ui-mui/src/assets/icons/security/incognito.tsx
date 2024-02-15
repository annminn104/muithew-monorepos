import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function IncognitoIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M21 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 11h20M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M10 17.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 17.5l.658-.33a3 3 0 012.684 0l.658.33' />
    </SvgIcon>
  );
}

export default React.memo(IncognitoIcon);
