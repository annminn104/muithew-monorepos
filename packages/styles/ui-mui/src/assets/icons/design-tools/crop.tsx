import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CropIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 19h-9c-3.771 0-5.657 0-6.828-1.172C5 16.657 5 14.771 5 11V2' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 5h3c3.771 0 5.657 0 6.828 1.172C19 7.343 19 9.229 19 13v3M2 5h3m14 14v3'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8.5 11.5c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56v-1z'
      />
    </SvgIcon>
  );
}

export default React.memo(CropIcon);
