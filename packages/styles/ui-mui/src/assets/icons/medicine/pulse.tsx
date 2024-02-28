import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PulseIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 15h1.394c.786 0 1.18 0 1.511.178.332.177.55.504.986 1.158l.16.24c.422.634.633.95.92.934.286-.017.459-.357.803-1.037l1.966-3.876c.359-.707.538-1.06.831-1.072.293-.012.5.326.914 1.002l.637 1.04c.43.7.644 1.05.985 1.242.342.191.752.191 1.573.191H19'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default PulseIcon;
