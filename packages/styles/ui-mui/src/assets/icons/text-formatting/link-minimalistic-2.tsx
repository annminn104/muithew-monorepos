import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkMinimalistic2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.162 18.488l-.72.72a6.117 6.117 0 01-8.65-8.65l.72-.72M9.837 14.162l4.325-4.325M9.837 5.512l.721-.72a6.117 6.117 0 118.65 8.65l-.72.72'
      />
    </SvgIcon>
  );
}

export default LinkMinimalistic2Icon;
