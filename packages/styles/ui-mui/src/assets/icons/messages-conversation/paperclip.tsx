import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PaperclipIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.918 17.807l7.89-7.553a2.253 2.253 0 000-3.284 2.503 2.503 0 00-3.43 0l-7.834 7.498a4.28 4.28 0 000 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196-2.653-2.539-6.954-2.539-9.607 0L3 10.034'
      />
    </SvgIcon>
  );
}

export default PaperclipIcon;
