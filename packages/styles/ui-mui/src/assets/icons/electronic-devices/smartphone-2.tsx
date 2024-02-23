import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Smartphone2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 5H9'></path>
      <circle cx='12' cy='19' r='1' stroke={linearColor} />
      <path stroke={linearColor} d='M4 17h16M4 7h16'></path>
    </SvgIcon>
  );
}

export default React.memo(Smartphone2Icon);
