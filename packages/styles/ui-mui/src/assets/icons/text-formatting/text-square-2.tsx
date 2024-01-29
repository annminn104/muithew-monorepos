import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextSquare2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21 9.3c-.058-2.512-.298-3.98-1.303-4.982C18.377 3 16.251 3 12 3 7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 5.4c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8M12 16V8M22 12h-2M4 12H2'
      />
    </SvgIcon>
  );
}

export default React.memo(TextSquare2Icon);
