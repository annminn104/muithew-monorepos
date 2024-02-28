import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CupHotIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.284 11.266c-.133-2-.2-2.999.393-3.632C4.27 7 5.272 7 7.276 7h5.449c2.003 0 3.005 0 3.598.634.593.633.526 1.633.393 3.632l-.343 5.133c-.177 2.655-.265 3.982-1.13 4.792-.865.809-2.196.809-4.856.809h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.343-5.134zM17 17h1a4 4 0 000-8h-1M16 18H4'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.05 5.061l.411-.575a.707.707 0 00-.165-.987.707.707 0 01-.165-.986l.41-.575m7.51 3.123l.41-.575a.707.707 0 00-.165-.987.707.707 0 01-.165-.986l.41-.575m-4.49 3.123l.41-.575a.707.707 0 00-.165-.987.707.707 0 01-.165-.986l.41-.575'
      />
    </SvgIcon>
  );
}

export default CupHotIcon;
