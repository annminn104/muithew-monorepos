import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VietNamIcon({ ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='square-flag' viewBox='0 0 24 18'>
      <path
        d='M9.15527e-05 2.25015C9.15527e-05 1.00751 0.976925 0.000152588 2.18191 0.000152588H21.8183C23.0233 0.000152588 24.0001 1.00751 24.0001 2.25015V15.7502C24.0001 16.9928 23.0233 18.0002 21.8183 18.0002H2.18191C0.976924 18.0002 9.15527e-05 16.9928 9.15527e-05 15.7502V2.25015Z'
        fill='#D80027'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.0036 11.196L9.615 12.516L10.0721 9.72356L8.14072 7.74716L10.8104 7.33916L12.0036 4.79996L13.1979 7.33916L15.8664 7.74716L13.935 9.72356L14.3921 12.5148'
        fill='#FFDA2C'
      />
    </SvgIcon>
  );
}

export default VietNamIcon;
