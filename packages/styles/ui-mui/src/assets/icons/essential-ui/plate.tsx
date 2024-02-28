import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlateIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15 4c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.235 4.108 5.886 4.01 9 4M12 5V3M8 10.5h8M8 14h5.5'
      />
    </SvgIcon>
  );
}

export default PlateIcon;
