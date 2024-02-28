import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HandPillsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M8.796 6.64a2.718 2.718 0 113.845-3.844l2.563 2.563a2.719 2.719 0 01-3.845 3.845L8.796 6.64z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M14 4s-.225 1.168-1.529 2.471C11.167 7.775 10 8 10 8' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 20.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118.868-.14 1.72-.355 2.492-.727.696-.337 1.549-.81 2.122-1.341.572-.53 1.168-1.397 1.59-2.075.364-.582.188-1.295-.386-1.728a1.887 1.887 0 00-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162-.11.017-.225.033-.345.047m0 0a8.176 8.176 0 01-.11.012m.11-.012a.998.998 0 00.427-.24 1.492 1.492 0 00.126-2.134 1.9 1.9 0 00-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 01-.11.012m0 0a9.274 9.274 0 01-1.814.004'
      />
      <rect width='3' height='8' x='2' y='14' stroke={linearColor} strokeWidth='1.5' rx='1.5' />
    </SvgIcon>
  );
}

export default HandPillsIcon;
