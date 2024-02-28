import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HeartBrokenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 5.5C7.5.827 2 4.275 2 9.138 2 14 6.02 16.592 8.962 18.911 10 19.73 11 20.501 12 20.501m0-15C16.5.826 22 4.274 22 9.137s-4.02 7.455-6.962 9.774C14 19.73 13 20.501 12 20.501m0-15l-1.5 3L14 11l-3 3.5 2 2-1 4'
      />
    </SvgIcon>
  );
}

export default HeartBrokenIcon;
