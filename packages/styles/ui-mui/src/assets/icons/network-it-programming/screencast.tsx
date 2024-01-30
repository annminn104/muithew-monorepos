import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ScreencastIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14 20c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4H6.5c-.464 0-.697 0-.892.02a4 4 0 00-3.589 3.588C2 7.803 2 8.036 2 8.5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M11 20a9 9 0 00-9-9M8 20a6 6 0 00-6-6M5 20a3 3 0 00-3-3' />
    </SvgIcon>
  );
}

export default React.memo(ScreencastIcon);
