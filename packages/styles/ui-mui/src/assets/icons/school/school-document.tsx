import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SchoolDocumentIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M4 6v13a3 3 0 003 3h10a3 3 0 003-3V9a3 3 0 00-3-3H4zm0 0V5' />
      <path
        fill={linearColor}
        d='M18 6v.75h.75V6H18zm-2.283-3.674l-.106-.742.106.742zM4.92 3.87l-.106-.743.106.743zM5.07 6.75H18v-1.5H5.071v1.5zM18.75 6V4.306h-1.5V6h1.5zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07l-.212-1.485zM4.814 3.126A1.821 1.821 0 003.25 4.93h1.5c0-.16.117-.295.276-.318l-.212-1.485zm13.936 1.18a2.75 2.75 0 00-3.139-2.722l.212 1.485a1.25 1.25 0 011.427 1.237h1.5zM5.071 5.25a.321.321 0 01-.321-.321h-1.5c0 1.006.815 1.821 1.821 1.821v-1.5z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 12h8M8 15.5h5.5' />
    </SvgIcon>
  );
}

export default SchoolDocumentIcon;
