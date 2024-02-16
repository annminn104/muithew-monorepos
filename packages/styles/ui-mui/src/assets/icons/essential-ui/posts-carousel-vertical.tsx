import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PostsCarouselVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 11.5c0-1.886 0-2.828.586-3.414C6.172 7.5 7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586C19 8.672 19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586H9c-1.886 0-2.828 0-3.414-.586C5 15.328 5 14.386 5 12.5v-1z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 2v.5A2.5 2.5 0 0116.5 5h-9A2.5 2.5 0 015 2.5V2M19 22v-.5a2.5 2.5 0 00-2.5-2.5h-9A2.5 2.5 0 005 21.5v.5'
      />
    </SvgIcon>
  );
}

export default React.memo(PostsCarouselVerticalIcon);
