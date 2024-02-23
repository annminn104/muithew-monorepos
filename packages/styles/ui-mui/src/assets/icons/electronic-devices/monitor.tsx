import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MonitorIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16 22H8M12 17v5M22 13H2' />
    </SvgIcon>
  );
}

export default React.memo(MonitorIcon);
