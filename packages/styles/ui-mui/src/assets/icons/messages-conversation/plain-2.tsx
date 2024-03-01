import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Plain2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.497 18.485l3.131-9.391c1.248-3.745 1.873-5.618.884-6.606-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804-.074.18-.12.37-.133.564-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523.19.28.297.607.31.945.008.171-.019.35-.072.705-.196 1.304-.294 1.956-.179 2.458.23 1 1.004 1.785 2 2.028.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064.32.019.63.124.898.303.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226.22-.011.438-.063.64-.152.734-.323 1.072-1.336 1.747-3.362z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 18L21 3' />
    </SvgIcon>
  );
}

export default Plain2Icon;
