import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TVIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12v4z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 2l3 3.5L15 2M16 6v16'></path>
      <path fill={linearColor} d='M20 16a1 1 0 10-2 0 1 1 0 002 0zM20 12a1 1 0 10-2 0 1 1 0 002 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(TVIcon);
