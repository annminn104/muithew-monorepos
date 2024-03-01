import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TicketSaleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.005 4h-4.01c-3.78 0-5.67 0-6.845 1.172-.81.806-1.061 1.951-1.14 3.817-.015.37-.023.556.046.679.07.123.345.278.897.586a1.999 1.999 0 010 3.492c-.552.309-.828.463-.897.586-.069.123-.061.308-.045.678.078 1.867.33 3.012 1.139 3.818C4.324 20 6.214 20 9.995 20h4.01c3.78 0 5.67 0 6.845-1.172.81-.806 1.061-1.951 1.14-3.817.015-.37.023-.556-.046-.679-.07-.123-.345-.277-.897-.586a1.999 1.999 0 010-3.492c.552-.308.828-.463.897-.586.069-.123.061-.308.045-.679-.078-1.866-.33-3.01-1.139-3.817C19.676 4 17.786 4 14.005 4z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 15l6-6' />
      <path fill={linearColor} d='M15.5 14.5a1 1 0 11-2 0 1 1 0 012 0zM10.5 9.5a1 1 0 11-2 0 1 1 0 012 0z' />
    </SvgIcon>
  );
}

export default TicketSaleIcon;
