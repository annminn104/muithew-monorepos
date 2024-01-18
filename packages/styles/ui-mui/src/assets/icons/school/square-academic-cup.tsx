import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SquareAcademicCupIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.783 3.5a5.17 5.17 0 014.434 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 01-4.435 0l-6.691-3.137c-1.456-.682-1.456-3.044 0-3.726L9.782 3.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2 8.5V14M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21c-1.796 0-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5'
      />
    </SvgIcon>
  );
}

export default React.memo(SquareAcademicCupIcon);
