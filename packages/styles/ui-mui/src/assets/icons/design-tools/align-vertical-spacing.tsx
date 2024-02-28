import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlignVerticalSpacingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 3H2M22 21H2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20 12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586C4 9.172 4 10.114 4 12c0 1.886 0 2.828.586 3.414C5.172 16 6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12z'
      />
    </SvgIcon>
  );
}

export default AlignVerticalSpacingIcon;
