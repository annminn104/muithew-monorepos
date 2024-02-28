import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Bag4Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 01.53-.434C7.04 6 8.41 6 11.149 6h1.704c2.739 0 4.108 0 5.13.7a4 4 0 01.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15-.16.248-.348.477-.56.683C18.75 21 16.785 21 12.853 21h-1.704c-3.932 0-5.898 0-7.064-1.138a3.998 3.998 0 01-.559-.683c-.888-1.366-.502-3.294.27-7.15z'
      />
      <circle cx='15' cy='9' r='1' fill={linearColor} />
      <circle cx='9' cy='9' r='1' fill={linearColor} />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 6V5a3 3 0 116 0v1' />
    </SvgIcon>
  );
}

export default Bag4Icon;
