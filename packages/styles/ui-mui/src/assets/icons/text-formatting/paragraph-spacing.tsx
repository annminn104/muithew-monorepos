import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ParagraphSpacingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4 21h16M4 3h16M12 5.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3'
      />
    </SvgIcon>
  );
}

export default ParagraphSpacingIcon;
