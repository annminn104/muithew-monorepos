import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='10' cy='14' r='8' stroke={linearColor} strokeWidth='1.5' />
      <path
        fill={linearColor}
        d='M22 2h.75a.75.75 0 00-.75-.75V2zm-.75 5a.75.75 0 001.5 0h-1.5zM17 1.25a.75.75 0 000 1.5v-1.5zm-.97 7.78l6.5-6.5-1.06-1.06-6.5 6.5 1.06 1.06zM21.25 2v5h1.5V2h-1.5zM17 2.75h5v-1.5h-5v1.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(MenIcon);
