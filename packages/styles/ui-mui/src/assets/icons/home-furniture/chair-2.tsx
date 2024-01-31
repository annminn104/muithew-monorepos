import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Chair2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 15.5a1 1 0 011-1h10a1 1 0 011 1 2 2 0 01-2 2H8a2 2 0 01-2-2zM6.628 6.766c.241-2.012.362-3.017.944-3.704a3 3 0 01.638-.566C8.96 2 9.974 2 12 2s3.039 0 3.79.496a3 3 0 01.638.566c.582.687.703 1.692.944 3.704l.09.757c.251 2.088.377 3.132-.22 3.804-.597.673-1.648.673-3.75.673h-2.983c-2.103 0-3.154 0-3.75-.673-.598-.672-.472-1.716-.222-3.804l.091-.757zM12 12v2'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 22v-2m0 0v-2.5m0 2.5l.466.116A2.88 2.88 0 0114.5 22M12 20l-.466.116A2.88 2.88 0 009.5 22M6 16l-.865-2.595c-.073-.22-.11-.33-.18-.482a2.36 2.36 0 00-.16-.297C4.34 11.876 3.733 11.5 2 11.5M18 16l.865-2.595c.073-.22.11-.33.18-.482.072-.153.1-.201.16-.297.456-.75 1.063-1.126 2.795-1.126'
      />
    </SvgIcon>
  );
}

export default React.memo(Chair2Icon);
