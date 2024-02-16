import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UmbrellaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M8.75 19a.75.75 0 00-1.5 0h1.5zm2.5-7v8h1.5v-8h-1.5zm-2.5 8v-1h-1.5v1h1.5zM12 12.75h9.524v-1.5H12v1.5zm.476-11.5h-.952v1.5h.952v-1.5zm-10 11.5H12v-1.5H2.476v1.5zM1.25 11.524c0 .677.549 1.226 1.226 1.226v-1.5c.151 0 .274.123.274.274h-1.5zm21.5 0c0-5.674-4.6-10.274-10.274-10.274v1.5a8.774 8.774 0 018.774 8.774h1.5zm-1.226 1.226c.677 0 1.226-.549 1.226-1.226h-1.5c0-.151.123-.274.274-.274v1.5zM10 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0010 22.75v-1.5zm1.524-20C5.85 1.25 1.25 5.85 1.25 11.524h1.5a8.774 8.774 0 018.774-8.774v-1.5zM11.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0012.75 20h-1.5z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M16.914 12C16.635 9.289 15.554 2 12 2 8.446 2 7.365 9.289 7.086 12' />
    </SvgIcon>
  );
}

export default React.memo(UmbrellaIcon);
