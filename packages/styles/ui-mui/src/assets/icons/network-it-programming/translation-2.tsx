import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Translation2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.243 16.243a6 6 0 10-8.485 0M19.071 19.071A9.97 9.97 0 0022 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.969 9.969 0 002.929 7.071'
      />
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342.054-.003.108-.003.162 0 .593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.34 1.34 0 01-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.345 1.345 0 01-.094-.206c-.292-.822.752-1.774 2.84-3.68z'
      />
    </SvgIcon>
  );
}

export default Translation2Icon;
