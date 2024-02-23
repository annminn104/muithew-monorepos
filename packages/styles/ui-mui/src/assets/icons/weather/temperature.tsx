import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TemperatureIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 22a5.5 5.5 0 003.439-9.793c-.264-.211-.439-.521-.439-.86V5a3 3 0 10-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0012 22z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M14.5 16.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 14V5'></path>
    </SvgIcon>
  );
}

export default React.memo(TemperatureIcon);
