import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlayIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.409 9.353a2.998 2.998 0 010 5.294L7.597 21.614C5.534 22.736 3 21.276 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968z'
      />
    </SvgIcon>
  );
}

export default PlayIcon;
