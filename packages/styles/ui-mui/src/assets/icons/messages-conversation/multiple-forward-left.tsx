import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MultipleForwardLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M11.336 5.48L7.363 9.01C5.795 10.406 5.01 11.103 5.01 12c0 .898.785 1.596 2.353 2.99l3.973 3.53c.716.637 1.074.956 1.369.823.295-.133.295-.612.295-1.57V15.43c3.6 0 7.5 1.714 9 4.571 0-9.143-5.333-11.428-9-11.428V6.227c0-.958 0-1.437-.295-1.57-.295-.132-.653.186-1.37.823z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8.461 4.5L3.245 9.344a3.897 3.897 0 00.126 5.823L8.46 19.5' />
    </SvgIcon>
  );
}

export default MultipleForwardLeftIcon;
