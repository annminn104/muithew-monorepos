import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AtomIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413-4.94 4.939-10.945 6.94-13.414 4.471-2.47-2.47-.468-8.475 4.471-13.413C12.468 2.59 18.473.589 20.942 3.058zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413 4.94 4.939 10.945 6.94 13.414 4.471 2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058z'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M14.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(AtomIcon);
