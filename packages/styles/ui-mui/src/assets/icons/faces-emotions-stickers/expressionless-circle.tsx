import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ExpressionlessCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 16h6' />
      <path fill={linearColor} d='M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5z' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
    </SvgIcon>
  );
}

export default ExpressionlessCircleIcon;
