import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BoltIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.923-.283-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 01-.018-.034c-.354-.683.289-1.552 1.574-3.29z'
      />
    </SvgIcon>
  );
}

export default BoltIcon;
