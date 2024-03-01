import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MailboxIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10.5 22v-2m4 2v-2' />
      <path
        fill={linearColor}
        d='M11 20v.75h.75V20H11zm3-.75a.75.75 0 000 1.5v-1.5zm3.5-14a.75.75 0 000 1.5v-1.5zM7 5.25a.75.75 0 000 1.5v-1.5zm2 14a.75.75 0 000 1.5v-1.5zm6 1.5a.75.75 0 000-1.5v1.5zm-4.75-9.5V20h1.5v-8.75h-1.5zm.75 8H4.233v1.5H11v-1.5zm-8.25-1.855V11.25h-1.5v6.145h1.5zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355v-1.5zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6v1.5zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5v-1.5zm14.75 6v6.175h1.5V11.25h-1.5zm-1.457 8H14v1.5h5.793v-1.5zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325h-1.5zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5h1.5zM7 6.75h11v-1.5H7v1.5zm2 14h6v-1.5H9v1.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 16h3M16 9.884V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 011.755.156l.08.03c.554.214 1.16.254 1.737.115a.439.439 0 01.542.427v2.221a.513.513 0 01-.393.499l-.066.016a3.199 3.199 0 01-1.9-.125 3.2 3.2 0 00-1.755-.156L16 5.41z'
      />
    </SvgIcon>
  );
}

export default MailboxIcon;
