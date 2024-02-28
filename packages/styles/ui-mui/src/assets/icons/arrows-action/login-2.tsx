import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Login2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879-.768-.768-.865-1.946-.877-4.121'
      />
    </SvgIcon>
  );
}

export default Login2Icon;
