import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FireMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 21c4.418 0 8-3.356 8-7.496 0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534C6.905 4.905 4 8.511 4 13.504 4 17.644 7.582 21 12 21z'
      />
    </SvgIcon>
  );
}

export default FireMinimalisticIcon;
