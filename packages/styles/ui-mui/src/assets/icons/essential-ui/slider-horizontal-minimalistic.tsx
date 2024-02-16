import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SliderHorizontalMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4.5 3h15M4.5 21h15' />
    </SvgIcon>
  );
}

export default React.memo(SliderHorizontalMinimalisticIcon);
