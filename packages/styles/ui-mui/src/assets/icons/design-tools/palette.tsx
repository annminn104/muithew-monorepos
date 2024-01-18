import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PaletteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 011.093-1.093C3.9 2 4.6 2 6 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 011.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 01-1.093 1.092C8.1 22 7.4 22 6 22c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C2 20.1 2 19.4 2 18V6z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 19H5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.314 4.93L11.172 7.07c-.579.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 000-1.545c-.185-.57-.68-1.066-1.67-2.056-.99-.99-1.486-1.485-2.056-1.67a2.5 2.5 0 00-1.545 0c-.571.185-1.066.68-2.056 1.67z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 001.092-1.092C22 20.1 22 19.4 22 18c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 00-1.092-1.092C20.1 14 19.4 14 18 14h-2.5'
      />
    </SvgIcon>
  );
}

export default React.memo(PaletteIcon);
