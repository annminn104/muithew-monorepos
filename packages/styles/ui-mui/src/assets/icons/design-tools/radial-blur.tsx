import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RadialBlurIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.956 9.956 0 004.197-4.731 9.985 9.985 0 00-.537-8.93 9.985 9.985 0 00-7.464-4.928A9.956 9.956 0 007 3.339C2.217 6.101.58 12.217 3.34 17z'
      />
      <path
        stroke={linearColor}
        d='M15.5 14.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15.5 9.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM11 14.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM11 9.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z'
      />
      <path fill={linearColor} d='M15 18.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10.5 18.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
      <path
        fill={linearColor}
        d='M15 18.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10.5 18.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM10.5 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.25 9a.75.75 0 110 1.5.75.75 0 010-1.5zM5.75 9a.75.75 0 110 1.5.75.75 0 010-1.5zM18.25 13.5a.75.75 0 110 1.5.75.75 0 010-1.5zM5.75 13.5a.75.75 0 110 1.5.75.75 0 010-1.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(RadialBlurIcon);
