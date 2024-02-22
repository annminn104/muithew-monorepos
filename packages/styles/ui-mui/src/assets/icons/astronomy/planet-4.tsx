import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Planet4Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M18 14a8 8 0 11-16 0 8 8 0 0116 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496 2.009-.59 3.5-.499 3.5-.499M3 16.005s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18c2.308 0 4.124-.753 5.181-1.333'
      />
      <path
        fill={linearColor}
        fillRule='evenodd'
        d='M20.53 4.045a2.018 2.018 0 00-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527zM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.006 2.006 0 00.306.53zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 01-3.424 1.976zm-.306-.53a2 2 0 013.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157z'
        clipRule='evenodd'
      />
    </SvgIcon>
  );
}

export default React.memo(Planet4Icon);
