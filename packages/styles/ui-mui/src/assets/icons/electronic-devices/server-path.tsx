import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ServerPathIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 19h-8M2 19h8M12 17v-3'></path>
      <circle cx='12' cy='19' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 11a3 3 0 013-3h14a3 3 0 110 6H5a3 3 0 01-3-3zM2 5a3 3 0 013-3h14a3 3 0 110 6H5a3 3 0 01-3-3z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 5h6M13 11h6'></path>
      <circle cx='6' cy='5' r='1' fill={linearColor} />
      <circle cx='6' cy='11' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default React.memo(ServerPathIcon);
