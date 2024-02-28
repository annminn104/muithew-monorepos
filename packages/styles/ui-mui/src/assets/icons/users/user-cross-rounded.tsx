import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserCrossRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14 20.834c-.634.108-1.305.166-2 .166-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936'
      />
      <circle cx='17' cy='18' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15.666 16.666l2.667 2.667m0-2.666l-2.666 2.666' />
    </SvgIcon>
  );
}

export default UserCrossRoundedIcon;
