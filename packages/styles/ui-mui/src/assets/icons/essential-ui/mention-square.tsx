import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MentionSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18a6 6 0 115.64-3.946 1.54 1.54 0 01-.413.599l-.08.074a1.637 1.637 0 01-2.747-1.203V12m0 0a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default MentionSquareIcon;
