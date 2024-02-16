import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BoltCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.213 10.174l2.015-1.605c1.302-1.037 1.953-1.556 2.363-1.3.409.256.197 1.05-.228 2.636l-.04.15c-.154.572-.23.858-.096 1.086l.007.012c.14.226.438.305 1.033.465 1.072.287 1.608.43 1.702.804a.39.39 0 01.004.019c.083.376-.34.712-1.186 1.386l-2.014 1.604c-1.303 1.037-1.954 1.556-2.364 1.3-.409-.256-.197-1.05.229-2.636l.04-.15c.153-.572.23-.858.095-1.086l-.007-.012c-.14-.226-.438-.305-1.033-.465-1.072-.287-1.608-.43-1.702-.804a.625.625 0 01-.004-.019c-.083-.376.34-.712 1.186-1.385z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
    </SvgIcon>
  );
}

export default React.memo(BoltCircleIcon);
