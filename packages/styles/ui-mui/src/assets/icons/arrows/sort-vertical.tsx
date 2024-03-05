import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M16 18L16 6M16 6L20 10.125M16 6L12 10.125' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M8 6L8 18M8 18L12 13.875M8 18L4 13.875' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default SortVerticalIcon;
