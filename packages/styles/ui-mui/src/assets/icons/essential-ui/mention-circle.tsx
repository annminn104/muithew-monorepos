import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MentionCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18a6 6 0 115.64-3.946 1.54 1.54 0 01-.413.599l-.08.074a1.637 1.637 0 01-2.747-1.203V12m0 0a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
    </SvgIcon>
  );
}

export default MentionCircleIcon;
