import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BoneBrokenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.137 2.738c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579l-1.28 1.28a.14.14 0 00.044.226 6.268 6.268 0 013.292 3.292.14.14 0 00.227.044l1.28-1.28c.393-.393 1.042-.369 1.578-.22 1.014.28 2.309-.105 3.052-.848A2.519 2.519 0 0017.7 6.3a2.519 2.519 0 00-3.563-3.562zM2.738 17.7a2.519 2.519 0 003.562 0 2.519 2.519 0 003.563 3.562c.743-.743 1.128-2.038.848-3.052-.149-.536-.173-1.185.22-1.579l1.28-1.28a.14.14 0 00-.044-.226 6.268 6.268 0 01-3.292-3.292.14.14 0 00-.227-.044l-1.28 1.28c-.393.393-1.042.369-1.578.22-1.014-.28-2.309.105-3.052.848a2.519 2.519 0 000 3.563z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.657 17.657l1.414 1.414M6.343 6.343L4.93 4.93M15 19v1M5 9H4M19 15h1M9 5V4'
      />
    </SvgIcon>
  );
}

export default React.memo(BoneBrokenIcon);
