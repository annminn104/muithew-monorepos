import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Tennis2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.34 17C6.1 21.783 12.217 23.422 17 20.66a9.956 9.956 0 004.197-4.731A9.985 9.985 0 0020.66 7a9.985 9.985 0 00-7.464-4.929A9.956 9.956 0 007 3.34C2.217 6.101.578 12.217 3.34 17z'
      />
      <path
        stroke={linearColor}
        strokeDasharray='1.5 2'
        strokeWidth='1.5'
        d='M13.196 2.071s-1.098 4.099 1.402 8.43c2.5 4.33 6.598 5.428 6.598 5.428M2.803 8.071s4.099 1.099 6.599 5.43c2.5 4.33 1.402 8.428 1.402 8.428'
      />
    </SvgIcon>
  );
}

export default Tennis2Icon;
