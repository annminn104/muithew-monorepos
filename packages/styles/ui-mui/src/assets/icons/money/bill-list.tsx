import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BillListIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.755 2h-9.51c-1.159 0-1.738 0-2.206.163a3.046 3.046 0 00-1.881 1.936C3 4.581 3 5.177 3 6.37v14.004c0 .858.985 1.314 1.608.744a.946.946 0 011.284 0l.483.442a1.657 1.657 0 002.25 0 1.657 1.657 0 012.25 0 1.657 1.657 0 002.25 0 1.657 1.657 0 012.25 0 1.657 1.657 0 002.25 0l.483-.442a.946.946 0 011.284 0c.623.57 1.608.114 1.608-.744V6.37c0-1.193 0-1.79-.158-2.27a3.045 3.045 0 00-1.881-1.937C18.493 2 17.914 2 16.755 2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10.5 11H17M7 11h.5M7 7.5h.5M7 14.5h.5M10.5 7.5H17M10.5 14.5H17' />
    </SvgIcon>
  );
}

export default BillListIcon;
