import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SkateboardingRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3 17l.608.676A4 4 0 006.581 19H17.42a4 4 0 002.973-1.324L21 17' />
      <circle cx='7' cy='21' r='1' fill={linearColor} />
      <circle cx='17' cy='21' r='1' fill={linearColor} />
      <circle cx='19' cy='4' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15 16.5v-2.134a1.85 1.85 0 00-.666-1.42l-.996-.831a1.59 1.59 0 01-.106-2.347l1.654-1.654a1.067 1.067 0 00-.335-1.735 4.269 4.269 0 00-3.944.304L8.5 8M11 14l-.621.621c-.434.434-.65.65-.926.765-.276.114-.583.114-1.196.114H7M16.5 10h3'
      />
    </SvgIcon>
  );
}

export default SkateboardingRoundedIcon;
