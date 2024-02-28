import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TestTubeMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.8 11.783l1.275.143a2.205 2.205 0 011.944 1.952 2.209 2.209 0 001.32 1.787l1.661.69m0 0l7.239-7.271-5.376-5.399-10.75 10.798a3.83 3.83 0 000 5.399 3.789 3.789 0 005.375 0L13 16.355zm8-6.506L14.181 3'
      />
    </SvgIcon>
  );
}

export default TestTubeMinimalisticIcon;
