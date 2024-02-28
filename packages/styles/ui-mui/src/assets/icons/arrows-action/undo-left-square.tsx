import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoLeftSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.5 9.5h7.539c1.367 0 2.051 0 2.547.32a2 2 0 01.594.594c.32.495.32 1.18.32 2.547 0 1.368 0 2.052-.32 2.548a2 2 0 01-.594.593c-.496.32-1.18.32-2.547.32H9.5M6.5 9.5l2.25-2.077M6.5 9.5l2.25 2.077'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default UndoLeftSquareIcon;
