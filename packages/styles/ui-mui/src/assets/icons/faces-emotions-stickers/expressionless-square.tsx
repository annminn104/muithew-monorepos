import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ExpressionlessSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 16h6' />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default ExpressionlessSquareIcon;
