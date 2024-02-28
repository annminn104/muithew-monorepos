import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BallsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.02 8.077c-2.018.194-4.163.8-5.653 2.29-1.49 1.49-2.096 3.635-2.29 5.653m7.943-7.943a18.998 18.998 0 013.228-.016 2.895 2.895 0 012.69 2.691c.072.932.098 2.059-.015 3.228M16.02 8.077l5.903 5.903m0 0c-.194 2.018-.8 4.163-2.29 5.654-1.49 1.49-3.635 2.095-5.653 2.29m0 0a19.003 19.003 0 01-3.228.015 2.895 2.895 0 01-2.69-2.691 18.998 18.998 0 01.015-3.228m5.903 5.903L8.077 16.02'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.995 8.252a6.47 6.47 0 00-.867-3.001 6.489 6.489 0 00-4.85-3.204 6.499 6.499 0 10-1.12 12.943'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.215 2s-.138 2.356 1.357 5.19c.457.869.956 1.569 1.428 2.123M3 5.928s1.933 1.047 3.428 3.881C7.923 12.644 7.785 15 7.785 15'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12.5 17.5l5-5M15.5 12.5l2 2M12.5 15.5l2 2M14 14l2 2' />
    </SvgIcon>
  );
}

export default BallsIcon;
