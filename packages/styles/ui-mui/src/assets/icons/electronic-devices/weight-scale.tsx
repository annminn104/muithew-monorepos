import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WeightScaleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 18h8M16.412 9.971l.665-1.664a2 2 0 00-1.528-2.715l-.425-.071a19 19 0 00-6.248 0l-.425.07a2 2 0 00-1.528 2.716l.665 1.664c.236.59.871.914 1.487.76 1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 001.487-.76zM10.18 9.93l-.675-1.884'
      />
    </SvgIcon>
  );
}

export default WeightScaleIcon;
