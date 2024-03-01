import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GalleryCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='15' cy='9' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 17.6L17.776 15.6a3 3 0 00-3.731-.225l-.299.21a2 2 0 01-2.564-.222l-4.29-4.29a2.3 2.3 0 00-3.14-.104l-1.47 1.286'
      />
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default GalleryCircleIcon;
