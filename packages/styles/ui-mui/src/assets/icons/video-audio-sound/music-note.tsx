import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNoteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M9 19a3 3 0 11-6 0 3 3 0 016 0zM21 17a3 3 0 11-6 0 3 3 0 016 0zM9 19V8M21 17V6' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184C9 6.796 9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398-.831-.599-2.032-.198-4.435.603z'
      />
    </SvgIcon>
  );
}

export default MusicNoteIcon;
