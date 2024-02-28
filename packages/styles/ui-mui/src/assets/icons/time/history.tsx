import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HistoryIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 8v4l2.5 2.5' />
      <path
        fill={linearColor}
        d='M5.604 5.604l-.53-.53.53.53zM4.338 6.871l-.75.003a.75.75 0 00.746.747l.004-.75zm2.542.762a.75.75 0 10.007-1.5l-.007 1.5zM5.075 4.321a.75.75 0 10-1.5.008l1.5-.008zm-1.248 6.464a.75.75 0 10-1.486-.204l1.486.204zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064l1.06-1.06zM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064l-1.06 1.06zm13.788.064c3.795-3.795 3.757-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668l1.06 1.06zM5.074 5.074L3.807 6.34 4.868 7.4l1.267-1.266-1.061-1.06zm-.74 2.547l2.546.012.007-1.5-2.545-.012-.008 1.5zm.754-.754L5.075 4.32l-1.5.008.013 2.545 1.5-.007zM2.34 10.58a9.812 9.812 0 002.797 8.281l1.06-1.06a8.312 8.312 0 01-2.371-7.017L2.34 10.58z'
      />
    </SvgIcon>
  );
}

export default HistoryIcon;
