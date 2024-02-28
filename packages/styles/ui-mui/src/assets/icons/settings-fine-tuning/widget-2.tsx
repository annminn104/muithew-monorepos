import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Widget2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2.5 6.5a4 4 0 118 0 4 4 0 01-8 0zM13.5 17.5a4 4 0 118 0 4 4 0 01-8 0zM21.5 6.5c0-1.886 0-2.828-.586-3.414C20.328 2.5 19.386 2.5 17.5 2.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414zM10.5 17.5c0-1.886 0-2.828-.586-3.414C9.328 13.5 8.386 13.5 6.5 13.5c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414 0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586 1.886 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414z'
      />
    </SvgIcon>
  );
}

export default Widget2Icon;
