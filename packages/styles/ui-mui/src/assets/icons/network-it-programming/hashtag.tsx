import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HashtagIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M10 3L5 21M19 3l-5 18M22 9H4M20 16H2' />
    </SvgIcon>
  );
}

export default HashtagIcon;
