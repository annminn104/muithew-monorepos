import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChandelierIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 4h6M12 4v12.5a3.5 3.5 0 107 0v-.056' />
      <path stroke={linearColor} strokeWidth='1.5' d='M16 11.2a1.2 1.2 0 011.2-1.2h3.6a1.2 1.2 0 011.2 1.2V13a3 3 0 11-6 0v-1.8z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 4v12.5a3.5 3.5 0 11-7 0v-.056' />
      <path stroke={linearColor} strokeWidth='1.5' d='M8 10.857A.857.857 0 007.143 10H2.857a.857.857 0 00-.857.857V13a3 3 0 106 0v-2.143z' />
    </SvgIcon>
  );
}

export default ChandelierIcon;
