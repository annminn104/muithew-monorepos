import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextBoldCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 110 6H8V7.522zM8 12h5a3 3 0 110 6H9.176C8.526 18 8 17.473 8 16.823V12z'
      />
    </SvgIcon>
  );
}

export default TextBoldCircleIcon;
