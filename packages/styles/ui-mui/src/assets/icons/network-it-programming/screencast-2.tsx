import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Screencast2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 18.415a3.02 3.02 0 00.828-.587C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.242.243.514.435.828.587'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427.053-.002.106-.002.159 0 .574.03 1.04.496 1.971 1.427 2.026 2.026 3.039 3.039 2.755 3.913a1.499 1.499 0 01-.09.218C16.297 21 14.865 21 12 21c-2.865 0-4.298 0-4.715-.819a1.496 1.496 0 01-.09-.218c-.284-.874.729-1.887 2.755-3.913z'
      />
    </SvgIcon>
  );
}

export default React.memo(Screencast2Icon);
