import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BasketballIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.34 17C6.1 21.783 12.216 23.42 17 20.66a9.956 9.956 0 004.196-4.731 9.985 9.985 0 00-.536-8.93 9.985 9.985 0 00-7.465-4.928A9.956 9.956 0 007 3.339C2.217 6.101.578 12.217 3.34 17z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.95 20.573S16.01 13.982 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073M21.864 12.58c-5.411-1.187-12.805 3.768-14.287 8.237M16.414 3.209c-1.488 4.42-8.74 9.303-14.125 8.242'
      />
    </SvgIcon>
  );
}

export default React.memo(BasketballIcon);
