import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FilterIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M19 3H5c-1.414 0-2.121 0-2.56.412C2 3.824 2 4.488 2 5.815v.69c0 1.037 0 1.556.26 1.986.26.43.733.698 1.682 1.232l2.913 1.64c.636.358.955.537 1.183.735.474.411.766.895.898 1.49.064.284.064.618.064 1.285v2.67c0 .909 0 1.364.252 1.718.252.355.7.53 1.594.88 1.879.734 2.818 1.101 3.486.683.668-.417.668-1.372.668-3.282v-2.67c0-.666 0-1 .064-1.285a2.68 2.68 0 01.899-1.49c.227-.197.546-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23.26-.43.26-.95.26-1.988v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3z'
      />
    </SvgIcon>
  );
}

export default React.memo(FilterIcon);
