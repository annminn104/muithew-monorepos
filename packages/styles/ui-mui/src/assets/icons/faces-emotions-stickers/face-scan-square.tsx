import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FaceScanSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1' />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10'
      />
    </SvgIcon>
  );
}

export default FaceScanSquareIcon;
