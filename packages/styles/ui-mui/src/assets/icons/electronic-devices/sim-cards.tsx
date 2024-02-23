import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SIMCardsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.172 20.828C4.343 22 6.229 22 10 22c3.771 0 5.657 0 6.828-1.172C18 19.657 18 17.771 18 14c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.864 3.864 0 0010 6C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18 17.898c1.3-.127 2.175-.416 2.828-1.07C22 15.657 22 13.771 22 10c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.864 3.864 0 0014 2c-3.771 0-5.657 0-6.828 1.172C6.518 3.825 6.229 4.7 6.102 6M10 14H9c-.943 0-1.414 0-1.707.293C7 14.586 7 15.057 7 16v1c0 .943 0 1.414.293 1.707C7.586 19 8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293C13 18.414 13 17.943 13 17v-.5M10 19v-2.5m0 0h3'
      />
    </SvgIcon>
  );
}

export default React.memo(SIMCardsIcon);
