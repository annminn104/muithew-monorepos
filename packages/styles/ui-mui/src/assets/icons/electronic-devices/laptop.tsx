import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LaptopIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.647 15.536H4.353m15.294 0V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H8.353c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v7.536m15.294 0l1.744 1.8.088.092a2 2 0 01.52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 01-1.87 1.87 5.006 5.006 0 01-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 01-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 01.52-1.284l.088-.092 1.744-1.8M9.5 18.5h5'
      />
      <path fill={linearColor} d='M12.75 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(LaptopIcon);
