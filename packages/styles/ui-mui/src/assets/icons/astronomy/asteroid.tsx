import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AsteroidIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 2C6.477 2 2 6.477 2 12a10.01 10.01 0 007.383 9.654c.834.226 1.711.346 2.617.346 4.879 0 8.941-3.494 9.823-8.116.116-.61.177-1.24.177-1.884a9.98 9.98 0 00-3.682-7.752A9.959 9.959 0 0012 2zM2.085 13.312a6 6 0 017.297 8.342M21.823 13.885a6.002 6.002 0 01-3.505-9.637'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M16 16a1 1 0 11-2 0 1 1 0 012 0zM13 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(AsteroidIcon);
