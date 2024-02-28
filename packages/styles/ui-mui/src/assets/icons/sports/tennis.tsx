import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TennisIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 004.197-4.731 9.985 9.985 0 00-.537-8.93 9.985 9.985 0 00-7.464-4.928A9.956 9.956 0 007 3.339C2.217 6.101.58 12.217 3.34 17z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.196 2.071s-.232 3.599 2.268 7.93c2.5 4.33 5.732 5.928 5.732 5.928M2.803 8.071s3.233 1.599 5.733 5.93c2.5 4.33 2.268 7.928 2.268 7.928'
      />
    </SvgIcon>
  );
}

export default TennisIcon;
