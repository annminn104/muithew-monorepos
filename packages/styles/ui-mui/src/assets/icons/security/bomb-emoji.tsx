import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BombEmojiIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='9.5' cy='14.5' r='7.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 16h2' />
      <path fill={linearColor} d='M14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5z' />
      <ellipse cx='9' cy='12.5' fill={linearColor} rx='1' ry='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17 7l-2 2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.981 2.353a.558.558 0 011.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 00-.314.315l-.654 1.659a.558.558 0 01-1.038 0l-.654-1.66a.558.558 0 00-.315-.314l-1.659-.654a.558.558 0 010-1.038l1.66-.654a.558.558 0 00.314-.315l.654-1.659z'
      />
    </SvgIcon>
  );
}

export default BombEmojiIcon;
