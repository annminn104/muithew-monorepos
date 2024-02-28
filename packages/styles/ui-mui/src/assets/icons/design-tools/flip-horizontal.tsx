import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FlipHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 18.113V5.886c0-1.702 0-2.553.542-2.832.543-.28 1.235.215 2.62 1.205l1.582 1.13c.616.439.924.659 1.09.982C8 6.694 8 7.073 8 7.83v8.341c0 .757 0 1.135-.166 1.458-.166.324-.474.544-1.09.983l-1.582 1.13c-1.385.99-2.077 1.484-2.62 1.205C2 20.666 2 19.816 2 18.113zM22 18.113V5.886c0-1.702 0-2.553-.542-2.832-.543-.28-1.235.215-2.62 1.205l-1.582 1.13c-.616.439-.924.659-1.09.982C16 6.694 16 7.073 16 7.83v8.341c0 .757 0 1.135.166 1.458.166.324.474.544 1.09.983l1.581 1.13c1.386.99 2.078 1.484 2.62 1.205.543-.28.543-1.13.543-2.833z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 14v-4M12 6V2M12 22v-4' />
    </SvgIcon>
  );
}

export default FlipHorizontalIcon;
