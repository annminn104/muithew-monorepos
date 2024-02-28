import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ColourTuningIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 12h7.5M22 12h-7.5M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10 0-6.842-1.66-10-3.928-10-1.734 0-4 3-4 6.316'
      />
    </SvgIcon>
  );
}

export default ColourTuningIcon;
