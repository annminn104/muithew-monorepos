import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartphoneRotateOrientationIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16V8z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.5 10.006c1.86.027 2.914.165 3.621.873.879.878.879 2.292.879 5.12 0 2.83 0 4.243-.879 5.122-.707.707-1.761.845-3.621.872M11 5H6M19 18v-4'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M10 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6'></path>
    </SvgIcon>
  );
}

export default React.memo(SmartphoneRotateOrientationIcon);
