import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Sofa3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 18h16a2 2 0 100-4H4a2 2 0 100 4zM4.5 14l-.075-.299c-1.086-4.347-1.63-6.52-.56-8.023.068-.095.14-.186.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403c.075.089.146.18.214.275 1.07 1.502.527 3.676-.56 8.023L19.5 14'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20 20v-2M4 20v-2' />
    </SvgIcon>
  );
}

export default React.memo(Sofa3Icon);
