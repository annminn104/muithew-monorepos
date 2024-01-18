import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UndoRightRoundSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M17.5 9.5H9.962a3.462 3.462 0 100 6.924H14.5m3-6.923l-2.25-2.077M17.5 9.5l-2.25 2.077'
      />
    </SvgIcon>
  );
}

export default React.memo(UndoRightRoundSquareIcon);
