import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PasswordMinimalisticInputIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 4h-2C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h2m3-16c3.114.01 4.765.108 5.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.765 19.892 18.114 19.99 15 20'
      />
      <path fill={linearColor} d='M9 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 2v20' />
    </SvgIcon>
  );
}

export default React.memo(PasswordMinimalisticInputIcon);
