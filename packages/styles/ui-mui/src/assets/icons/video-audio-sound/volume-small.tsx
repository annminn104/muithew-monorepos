import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VolumeSmallIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.215 3.215 0 011.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 00.712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0115.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.314 2.314 0 01-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 00-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 01-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17.127 17.127 0 011.5 12c0-.323.013-.671.035-1.029z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 9s.5.9.5 3-.5 3-.5 3' />
    </SvgIcon>
  );
}

export default VolumeSmallIcon;
