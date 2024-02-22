import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Planet3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z'></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3 8.008S5.937 11 10.437 11c3.063 0 4.689-1.773 6.063-2.244 2.583-.886 4.5-.748 4.5-.748M3 14.008s2.089-.138 4.903.748C9.401 15.226 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(Planet3Icon);
