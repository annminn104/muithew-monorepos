import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WaterDropsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 012.524 0C8.434 14.472 10 16.393 10 17.833zM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 012.524 0C20.434 14.472 22 16.393 22 17.833zM16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 012.524 0C14.434 4.472 16 6.393 16 7.833z'
      />
    </SvgIcon>
  );
}

export default WaterDropsIcon;
