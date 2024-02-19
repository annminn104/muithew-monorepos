import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BillIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 2h20' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 2h16v10.27c0 1.34 0 2.009-.268 2.6-.268.59-.773 1.03-1.781 1.912l-2 1.749C14.068 20.177 13.127 21 12 21c-1.127 0-2.068-.823-3.951-2.47l-2-1.748C5.04 15.9 4.536 15.46 4.269 14.87 4 14.28 4 13.61 4 12.27V2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8.5 13h7M8.5 8h7' />
    </SvgIcon>
  );
}

export default React.memo(BillIcon);
