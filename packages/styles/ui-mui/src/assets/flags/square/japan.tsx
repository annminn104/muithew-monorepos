import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function JapanIcon({ ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='square-flag' viewBox='0 0 24 18'>
      <path
        d='M0.00012207 2.24998C0.00012207 1.00734 0.976955 -1.52588e-05 2.18194 -1.52588e-05H21.8183C23.0233 -1.52588e-05 24.0001 1.00734 24.0001 2.24998V15.75C24.0001 16.9926 23.0233 18 21.8183 18H2.18194C0.976955 18 0.00012207 16.9926 0.00012207 15.75V2.24998Z'
        fill='white'
      />
      <path
        d='M12.0001 13.1998C14.2093 13.1998 16.0001 11.3194 16.0001 8.99979C16.0001 6.68019 14.2093 4.79979 12.0001 4.79979C9.79098 4.79979 8.00012 6.68019 8.00012 8.99979C8.00012 11.3194 9.79098 13.1998 12.0001 13.1998Z'
        fill='#D80027'
      />
    </SvgIcon>
  );
}

export default JapanIcon;
