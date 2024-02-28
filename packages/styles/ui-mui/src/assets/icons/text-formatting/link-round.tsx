import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 15h2a6 6 0 000-12H8a6 6 0 00-4.472 10M14 9h-2a6 6 0 000 12h4a6 6 0 004.472-10'
      />
    </SvgIcon>
  );
}

export default LinkRoundIcon;
