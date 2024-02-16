import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SliderVerticalMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 8c0-2.828 0-4.243.879-5.121C7.757 2 9.172 2 12 2c2.828 0 4.243 0 5.121.879C18 3.757 18 5.172 18 8v8c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16V8z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 4.5v15M3 4.5v15' />
    </SvgIcon>
  );
}

export default React.memo(SliderVerticalMinimalisticIcon);
