import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SkateboardingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3 17l1.204 1.338A2 2 0 005.691 19h12.618a2 2 0 001.487-.662L21 17'
      />
      <circle cx='7' cy='21' r='1' fill={linearColor} />
      <circle cx='17' cy='21' r='1' fill={linearColor} />
      <circle cx='19' cy='4' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15 16.5v-1.25l-.001-.166a3 3 0 00-1.343-2.423l-.15-.095c-.097-.06-.146-.09-.177-.112a2 2 0 01-.184-3.168c.029-.025.068-.056.145-.118l.446-.357a1.737 1.737 0 00-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.246 8.246 0 004 0'
      />
    </SvgIcon>
  );
}

export default SkateboardingIcon;
