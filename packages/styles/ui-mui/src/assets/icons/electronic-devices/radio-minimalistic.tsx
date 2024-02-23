import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RadioMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z'
      />
      <circle cx='8' cy='14' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.5 11H19M13.5 14H19M13.5 17H19M6.5 6L15 2'></path>
    </SvgIcon>
  );
}

export default React.memo(RadioMinimalisticIcon);
