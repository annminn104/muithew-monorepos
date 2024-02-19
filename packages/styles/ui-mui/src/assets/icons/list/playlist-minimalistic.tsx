import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlaylistMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 6H3M10 16H3M10 11H3' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 010 1.53c-.26.628-1.081 1.102-2.723 2.05-1.642.948-2.463 1.422-3.136 1.333a2 2 0 01-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 011.326-.765c.673-.089 1.494.385 3.136 1.333z'
      />
    </SvgIcon>
  );
}

export default React.memo(PlaylistMinimalisticIcon);
