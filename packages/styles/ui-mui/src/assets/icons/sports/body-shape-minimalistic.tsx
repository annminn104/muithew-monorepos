import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BodyShapeMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32.66 1.193 1.517 2.38 2.146 3.863.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32-.66 1.193-1.517 2.38-2.146 3.863A10.605 10.605 0 002 22'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 13h12M12 22c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5' />
    </SvgIcon>
  );
}

export default React.memo(BodyShapeMinimalisticIcon);
