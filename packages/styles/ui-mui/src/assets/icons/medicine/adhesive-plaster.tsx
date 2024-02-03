import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AdhesivePlasterIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.213 9.071a4.142 4.142 0 015.858-5.858L20.787 14.93a4.142 4.142 0 01-5.858 5.858L3.213 9.07z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 17.858l-2.929 2.929a4.142 4.142 0 01-5.858-5.858L6.143 12 12 17.858zM12 6.142l2.929-2.929a4.142 4.142 0 015.858 5.858L17.857 12 12 6.142z'
      />
      <path
        fill={linearColor}
        d='M15.841 12.871a.788.788 0 11-1.114 1.114.788.788 0 011.114-1.114zM12.129 9.159a.787.787 0 10-1.114 1.114.787.787 0 001.114-1.114zM16.77 15.656a.787.787 0 11-1.114 1.114.787.787 0 011.114-1.114zM9.345 8.23A.788.788 0 108.23 9.346.788.788 0 009.345 8.23zM13.057 11.943a.787.787 0 11-1.113 1.114.787.787 0 011.113-1.114zM13.985 14.728a.788.788 0 11-1.114 1.113.788.788 0 011.114-1.113zM10.273 11.015a.787.787 0 10-1.114 1.114.787.787 0 001.114-1.114z'
      />
    </SvgIcon>
  );
}

export default React.memo(AdhesivePlasterIcon);
