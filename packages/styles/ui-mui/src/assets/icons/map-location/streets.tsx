import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StreetsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z'
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path d='M3.5 20.5L12 12M20.5 3.5L12 12M20.5 20.5L12 12' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' />
    </SvgIcon>
  );
}

export default StreetsIcon;
