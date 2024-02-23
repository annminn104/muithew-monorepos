import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BluetoothSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.933 9.8L11 12V8c0-.873 0-1.31.276-1.447.277-.139.626.123 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.433-.734.8zM13.933 15.8l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <path fill={linearColor} d='M8.48 8.924a.75.75 0 10-.96 1.152l.96-1.152zm3 2.5l-3-2.5-.96 1.152 3 2.5.96-1.152z' />
      <path fill={linearColor} d='M8.48 15.076a.75.75 0 01-.96-1.152l.96 1.152zm3-2.5l-3 2.5-.96-1.152 3-2.5.96 1.152z' />
    </SvgIcon>
  );
}

export default React.memo(BluetoothSquareIcon);
