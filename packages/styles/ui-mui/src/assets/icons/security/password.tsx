import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PasswordIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2M6.732 10v4M5 11l3.464 2m0-2L5 13M17.268 10v4m-1.732-3L19 13m0-2l-3.464 2'
      />
    </SvgIcon>
  );
}

export default PasswordIcon;
