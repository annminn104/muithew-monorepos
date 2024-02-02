import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BoneCrackIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.137 2.738c-.743.743-1.128 2.038-.847 3.052.148.536.172 1.185-.221 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 006.3 17.7a2.519 2.519 0 003.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 1017.7 6.3a2.519 2.519 0 00-3.563-3.562z'
      ></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.232 10.232v2.122l2.122-.708v1.415L15 12.5'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(BoneCrackIcon);
