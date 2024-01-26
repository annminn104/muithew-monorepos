import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextBoldCrossIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 110 6H8V7.522zM8 12h5a3 3 0 110 6H9.176C8.526 18 8 17.473 8 16.823V12z'
      />
    </SvgIcon>
  );
}

export default React.memo(TextBoldCrossIcon);
