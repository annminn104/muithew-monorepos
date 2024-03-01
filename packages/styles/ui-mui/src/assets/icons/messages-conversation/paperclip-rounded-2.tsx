import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PaperclipRounded2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.95 11.009l-2.94 2.926a4.125 4.125 0 000 5.853 4.17 4.17 0 005.88 0l3.675-3.658a8.25 8.25 0 000-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 000 10.243'
      />
    </SvgIcon>
  );
}

export default PaperclipRounded2Icon;
