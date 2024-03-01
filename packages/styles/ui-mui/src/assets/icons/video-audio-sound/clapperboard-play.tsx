import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ClapperboardPlayIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21.5 8h-19M10.5 2.5L7 8M17 2.5L13.5 8M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5z'
      />
    </SvgIcon>
  );
}

export default ClapperboardPlayIcon;
