import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GalleryWideIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 7l-.012-1c.112-.931.347-1.574.837-2.063C5.765 3 7.279 3 10.307 3h3.211c3.028 0 4.541 0 5.482.937.49.489.725 1.132.837 2.063v1'
      />
      <circle cx='17.5' cy='10.5' r='1.5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 14.5l1.752-1.533a2.3 2.3 0 013.14.105l4.29 4.29a2 2 0 002.564.222l.299-.21a3 3 0 013.731.225L21 20.5'
      />
    </SvgIcon>
  );
}

export default GalleryWideIcon;
