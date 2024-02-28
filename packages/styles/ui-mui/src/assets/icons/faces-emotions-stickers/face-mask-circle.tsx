import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FaceMaskCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.5 20.5L17 15l-3.143-1.257a5 5 0 00-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2'
      />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
    </SvgIcon>
  );
}

export default FaceMaskCircleIcon;
