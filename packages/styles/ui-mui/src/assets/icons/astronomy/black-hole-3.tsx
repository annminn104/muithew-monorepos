import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BlackHole3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5'></circle>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 10c5 0 4.6 12-3 12M12.312 14c-5 0-4.6-12 3-12M10 12.312c0-5 12-4.6 12 3M14 12c0 5-12 4.6-12-3'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(BlackHole3Icon);
