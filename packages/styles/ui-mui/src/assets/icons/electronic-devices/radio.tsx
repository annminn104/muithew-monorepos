import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RadioIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M5 11a2 2 0 012-2h10a2 2 0 110 4H7a2 2 0 01-2-2zM9 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 11.5V13M13 17h5M6.5 6L15 2'></path>
    </SvgIcon>
  );
}

export default React.memo(RadioIcon);
