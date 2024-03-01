import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Paperclip2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.107 17.417l7.38-7.066c.448-.429.672-.643.789-.876.21-.417.21-.903 0-1.32-.117-.233-.341-.447-.79-.876-.447-.43-.671-.644-.915-.756-.435-.2-.942-.2-1.378 0-.243.112-.467.327-.915.756l-7.326 7.015c-1.099 1.052-1.648 1.578-1.84 2.19-.15.475-.15.982 0 1.457.192.612.741 1.138 1.84 2.19C6.05 21.183 6.6 21.71 7.239 21.893a2.76 2.76 0 001.522 0c.639-.184 1.188-.71 2.287-1.762l7.434-7.117c1.044-1 1.566-1.5 1.88-2.02a4.395 4.395 0 000-4.562c-.314-.52-.836-1.02-1.88-2.02-1.045-1-1.567-1.5-2.11-1.8a4.948 4.948 0 00-4.765 0c-.543.3-1.065.8-2.11 1.8l-5.99 5.734'
      />
    </SvgIcon>
  );
}

export default Paperclip2Icon;
