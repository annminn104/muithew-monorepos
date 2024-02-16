import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GlassesIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='18' cy='16' r='4' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='6' cy='16' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14 16.213l-.656-.234a4 4 0 00-2.688 0l-.656.235M2 16l.763-8.395c.115-1.264.173-1.896.543-2.363.37-.467.972-.668 2.176-1.07L6 4M22 16l-.763-8.395c-.115-1.264-.172-1.896-.542-2.363-.37-.467-.973-.668-2.177-1.07L18 4'
      />
    </SvgIcon>
  );
}

export default React.memo(GlassesIcon);
