import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ClipboardAddIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16 4c2.175.012 3.353.109 4.121.877C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121C4.647 4.109 5.825 4.012 8 4'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M8 3.5A1.5 1.5 0 019.5 2h5A1.5 1.5 0 0116 3.5v1A1.5 1.5 0 0114.5 6h-5A1.5 1.5 0 018 4.5v-1z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 13h-3m0 0H9m3 0v-3m0 3v3' />
    </SvgIcon>
  );
}

export default React.memo(ClipboardAddIcon);
