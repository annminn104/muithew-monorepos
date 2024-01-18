import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CropMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 19h-9c-3.771 0-5.657 0-6.828-1.172C5 16.657 5 14.771 5 11V2' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 5h3c3.771 0 5.657 0 6.828 1.172C19 7.343 19 9.229 19 13v3M2 5h3m14 14v3'
      />
    </SvgIcon>
  );
}

export default React.memo(CropMinimalisticIcon);
