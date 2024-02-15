import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EyeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
    </SvgIcon>
  );
}

export default React.memo(EyeIcon);
