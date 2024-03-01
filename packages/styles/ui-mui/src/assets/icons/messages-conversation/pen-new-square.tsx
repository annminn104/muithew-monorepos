import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PenNewSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.652 3.455l.649-.649A2.753 2.753 0 0121.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829-.205.262-.38.547-.524.848-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.59 4.59 0 01-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 01-.939-.94l.374-1.122m1.688 1.688L8.412 13.9'
      />
    </SvgIcon>
  );
}

export default PenNewSquareIcon;
