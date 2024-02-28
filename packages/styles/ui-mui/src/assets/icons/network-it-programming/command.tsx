import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CommandIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 8h8v8H8V8zM16 16.001h3a3 3 0 11-3 3v-3zM8.001 16.001h-3a3 3 0 103 3v-3zM16 8h3a3 3 0 10-3-3v3zM8.001 8h-3a3 3 0 113-3v3z'
      />
    </SvgIcon>
  );
}

export default CommandIcon;
