import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextBoldIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 4.609A2.609 2.609 0 017.609 2H12a5 5 0 010 10H5V4.609zM5 12h9a5 5 0 010 10H7.059A2.059 2.059 0 015 19.941V12z'
      />
    </SvgIcon>
  );
}

export default TextBoldIcon;
