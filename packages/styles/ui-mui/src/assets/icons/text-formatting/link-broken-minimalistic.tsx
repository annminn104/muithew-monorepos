import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkBrokenMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0 2.432 2.274 2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03-2.398-2.293-2.456-6.033-.091-8.358l.905-.89M6.587 3L7.5 5.205M3.502 6.087L9.05 8.795'
      />
    </SvgIcon>
  );
}

export default LinkBrokenMinimalisticIcon;
