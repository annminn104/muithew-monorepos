import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GraphNewIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7 14l1.797-2.156c.712-.855 1.068-1.282 1.536-1.282.469 0 .825.427 1.537 1.282l.26.312c.712.855 1.068 1.282 1.537 1.282.468 0 .824-.427 1.536-1.282L17 10'
      />
      <circle cx='19' cy='5' r='3' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(GraphNewIcon);
