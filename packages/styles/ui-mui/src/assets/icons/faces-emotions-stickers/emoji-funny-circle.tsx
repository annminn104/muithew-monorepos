import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EmojiFunnyCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2'
      />
      <ellipse cx='14.509' cy='9.775' fill={linearColor} rx='1' ry='1.5' transform='rotate(-15 14.51 9.775)' />
      <ellipse cx='8.714' cy='11.328' fill={linearColor} rx='1' ry='1.5' transform='rotate(-15 8.714 11.328)' />
      <path stroke={linearColor} strokeWidth='1.5' d='M13 16l.478.974a1.5 1.5 0 102.693-1.322l-.46-.936' />
    </SvgIcon>
  );
}

export default EmojiFunnyCircleIcon;
