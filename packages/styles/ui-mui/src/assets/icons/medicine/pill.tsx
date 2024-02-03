import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PillIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.99 13.602a6.796 6.796 0 019.612-9.611l6.407 6.407a6.796 6.796 0 11-9.61 9.611L3.99 13.602z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M16.806 7.194s-.541 2.806-3.674 5.939C10 16.265 7.194 16.806 7.194 16.806' />
    </SvgIcon>
  );
}

export default React.memo(PillIcon);
