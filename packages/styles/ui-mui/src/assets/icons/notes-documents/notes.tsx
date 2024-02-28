import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function NotesIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 00-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591-2.255-.605-3.383-.907-4.358-.68a4 4 0 00-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905h0l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 001.162 2.011c.731.685 1.859.987 4.114 1.592h0c2.032.544 3.149.843 4.064.73.1-.012.198-.03.294-.052a4 4 0 002.011-1.16c.685-.732.987-1.86 1.592-4.115z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.415 17.974a4 4 0 01-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 01-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 011.162-2.011c.731-.685 1.859-.987 4.114-1.592.426-.114.813-.218 1.165-.309'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M11.777 10l4.83 1.294M11 12.898l2.898.776' />
    </SvgIcon>
  );
}

export default NotesIcon;
