import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PostsCarouselHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12.5 5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v6c0 1.886 0 2.828-.586 3.414C15.328 19 14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586C7.5 17.828 7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414C8.672 5 9.614 5 11.5 5h1z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 19h-.5a2.5 2.5 0 01-2.5-2.5v-9A2.5 2.5 0 0121.5 5h.5M2 19h.5A2.5 2.5 0 005 16.5v-9A2.5 2.5 0 002.5 5H2'
      />
    </SvgIcon>
  );
}

export default PostsCarouselHorizontalIcon;
