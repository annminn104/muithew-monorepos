import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WhiskIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12.9 15.127l-6.04 6.04a2.847 2.847 0 01-4.026-4.027l6.039-6.039m11.675-7.65c1.209 1.209-1.45 4.672-3.22 6.442-1.77 1.77-6.04 5.234-7.247 4.026M20.548 3.452c-1.208-1.209-4.67 1.45-6.441 3.22-1.77 1.771-5.235 6.039-4.026 7.247M20.548 3.452c2.224 2.223 1.825 6.227-.732 8.784-2.558 2.557-7.512 3.906-9.735 1.683M20.548 3.452c-2.223-2.224-6.227-1.825-8.784.732-2.558 2.557-3.907 7.512-1.683 9.735'
      />
    </SvgIcon>
  );
}

export default WhiskIcon;
