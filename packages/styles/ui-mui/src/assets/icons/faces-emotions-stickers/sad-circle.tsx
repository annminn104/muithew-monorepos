import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SadCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 17c.85-.63 1.885-1 3-1s2.15.37 3 1' />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
    </SvgIcon>
  );
}

export default React.memo(SadCircleIcon);
