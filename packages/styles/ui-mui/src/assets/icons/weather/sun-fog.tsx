import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SunFogIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 22h8M5 19h14M2 16h20'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 6a6 6 0 00-4.5 9.969h9A6 6 0 0012 6z'></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 5.322l-.393-.393'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(SunFogIcon);
