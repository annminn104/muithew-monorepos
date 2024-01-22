import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Shop2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2M20 22V11M4 22V11' />
      <path
        stroke={linearColor}
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.403-3.548c-.538-1.076-.807-1.614-1.29-1.912C18.331 2 17.73 2 16.527 2z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3'
      />
    </SvgIcon>
  );
}

export default React.memo(Shop2Icon);
