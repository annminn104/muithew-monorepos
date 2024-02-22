import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ConfoundedSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 12l2-1.5L8 9M16 12l-2-1.5L16 9M16 16l-1.333-1-1.334 1L12 15l-1.333 1-1.334-1L8 16'
      />
    </SvgIcon>
  );
}

export default React.memo(ConfoundedSquareIcon);
