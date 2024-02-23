import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CloudWaterDropsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.381 8.027a5.765 5.765 0 011.905-.321c.654 0 1.283.109 1.87.309m-11.04 2.594a4.351 4.351 0 00-.83-.08C3.919 10.53 2 12.426 2 14.765c0 1.896 1.261 3.501 3 4.041m2.116-8.197a5.577 5.577 0 01-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015m-11.04 2.594a4.29 4.29 0 011.55.634m9.49-3.228C20.392 8.78 22 10.881 22 13.353c0 2.343-1.444 4.353-3.5 5.207'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M11 20.333c0 .92-.672 1.667-1.5 1.667S8 21.254 8 20.333c0-.505.451-1.158.859-1.644a.828.828 0 011.282 0c.408.486.859 1.14.859 1.644zM16 20.333c0 .92-.672 1.667-1.5 1.667s-1.5-.746-1.5-1.667c0-.505.451-1.158.859-1.644a.828.828 0 011.282 0c.408.486.859 1.14.859 1.644zM13.5 15.333c0 .92-.672 1.667-1.5 1.667s-1.5-.746-1.5-1.667c0-.505.451-1.158.859-1.645a.828.828 0 011.282 0c.408.487.859 1.14.859 1.645z'
      />
    </SvgIcon>
  );
}

export default React.memo(CloudWaterDropsIcon);
