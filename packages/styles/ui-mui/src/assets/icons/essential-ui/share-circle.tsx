import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShareCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 9a3 3 0 110-6 3 3 0 010 6zM5.5 21a3 3 0 110-6 3 3 0 010 6zM18.5 21a3 3 0 110-6 3 3 0 010 6z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 13a7.98 7.98 0 00-2.708-6M4 13a7.98 7.98 0 012.708-6M10 20.748c.64.165 1.31.252 2 .252s1.36-.087 2-.252'
      />
    </SvgIcon>
  );
}

export default ShareCircleIcon;
