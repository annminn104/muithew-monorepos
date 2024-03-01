import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RubleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9 14h3M10 12V8.2c0-.186 0-.279.012-.356a1 1 0 01.832-.832C10.92 7 11.014 7 11.2 7h2.3a2.5 2.5 0 010 5H10zm0 0v5m0-5H9'
      />
    </SvgIcon>
  );
}

export default RubleIcon;
