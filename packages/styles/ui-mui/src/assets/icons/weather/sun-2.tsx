import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Sun2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 2v2M12 20v2M4 12H2M22 12h-2M19.778 4.222l-2.222 2.032M4.222 4.222l2.222 2.032M6.444 17.556l-2.222 2.222M19.778 19.778l-2.222-2.223'
      />
    </SvgIcon>
  );
}

export default React.memo(Sun2Icon);
