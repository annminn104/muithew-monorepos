import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ScissorsSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.5 17.1L8 6m10 10.2c0 .994-.84 1.8-1.875 1.8-1.036 0-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8c1.035 0 1.875.806 1.875 1.8zM9.5 17.1L16 6M6 16.2c0 .994.84 1.8 1.875 1.8 1.036 0 1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8C6.839 14.4 6 15.206 6 16.2z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default ScissorsSquareIcon;
