import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function NoteBookIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 2.5V22M2 12h2M2 16h2M2 8h2M11.5 6.5h5M11.5 10h5' />
    </SvgIcon>
  );
}

export default NoteBookIcon;
