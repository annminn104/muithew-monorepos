import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GhostSmileIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1' />
      <ellipse cx='15' cy='9.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='9.5' fill={linearColor} rx='1' ry='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M22 19.723v-7.422C22 6.61 17.523 2 12 2S2 6.612 2 12.3v7.423c0 1.322 1.351 2.182 2.5 1.591a2.82 2.82 0 012.896.186 2.822 2.822 0 003.208 0l.353-.242a1.836 1.836 0 012.086 0l.353.242a2.822 2.822 0 003.208 0 2.82 2.82 0 012.897-.186c1.148.591 2.499-.269 2.499-1.591z'
      />
    </SvgIcon>
  );
}

export default React.memo(GhostSmileIcon);
