import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LetterUnreadIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 10c.018.727 0 1.054 0 2 0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h3'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295 1.086 0 2.005-.765 3.841-2.296'
      />
      <circle cx='19' cy='5' r='3' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default LetterUnreadIcon;
