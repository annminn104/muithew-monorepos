import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TurntableMusicNoteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464 1.241 1.241 1.43 3.123 1.46 6.536M19 20v-8'
      />
      <circle cx='17' cy='20' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 15a3 3 0 01-3-3'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M9 12a3 3 0 116 0 3 3 0 01-6 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(TurntableMusicNoteIcon);
