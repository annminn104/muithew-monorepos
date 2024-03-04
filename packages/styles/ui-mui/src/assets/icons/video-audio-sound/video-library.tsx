import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VideoLibraryIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M19.562 7a2.132 2.132 0 00-2.1-2.5H6.538a2.132 2.132 0 00-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 00-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.39 0-.497.011a2 2 0 00-1.787 1.993c0 .107.015.237.043.496M14.581 13.616c.559.346.559 1.242 0 1.588l-3.371 2.09c-.543.337-1.21-.1-1.21-.794v-4.18c0-.693.667-1.13 1.21-.794l3.371 2.09z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024.947 1.024.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464-.897.743-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743-.897-.743-1.072-1.983-1.422-4.464l-.422-3z'
      />
    </SvgIcon>
  );
}

export default VideoLibraryIcon;
