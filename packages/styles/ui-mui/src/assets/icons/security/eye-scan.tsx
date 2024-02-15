import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EyeScanIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 18.771 2 15M22 15c0 3.771 0 4.657-1.172 5.828C19.657 22 17.771 22 14 22M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 5.229 22 9M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 5.229 2 9'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5.892 14.06C5.297 13.37 5 13.025 5 12c0-1.025.297-1.37.892-2.06C7.08 8.562 9.072 7 12 7c2.927 0 4.92 1.562 6.108 2.94.595.69.892 1.035.892 2.06 0 1.025-.297 1.37-.892 2.06C16.92 15.438 14.928 17 12 17c-2.927 0-4.92-1.562-6.108-2.94z'
      />
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(EyeScanIcon);
