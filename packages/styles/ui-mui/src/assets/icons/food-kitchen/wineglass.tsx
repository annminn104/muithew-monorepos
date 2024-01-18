import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WineglassIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M12.75 15.286a.75.75 0 00-1.5 0h1.5zm3 6.464a.75.75 0 000-1.5v1.5zm-7.5-1.5a.75.75 0 000 1.5v-1.5zm3-4.964V21h1.5v-5.714h-1.5zm4.5 4.964H12v1.5h3.75v-1.5zm-3.75 0H8.25v1.5H12v-1.5zM6.895 3.75h10.21v-1.5H6.895v1.5zM18.25 4.895V8h1.5V4.895h-1.5zM5.75 8V4.895h-1.5V8h1.5zM12 14.25A6.25 6.25 0 015.75 8h-1.5A7.75 7.75 0 0012 15.75v-1.5zM18.25 8A6.25 6.25 0 0112 14.25v1.5A7.75 7.75 0 0019.75 8h-1.5zm-1.145-4.25c.633 0 1.145.513 1.145 1.145h1.5a2.645 2.645 0 00-2.645-2.645v1.5zm-10.21-1.5A2.645 2.645 0 004.25 4.895h1.5c0-.632.513-1.145 1.145-1.145v-1.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.5 9S7.581 8.087 9 8c2.465-.152 3.535 2.152 6 2 1.419-.087 3.5-1 3.5-1'
      />
    </SvgIcon>
  );
}

export default React.memo(WineglassIcon);
