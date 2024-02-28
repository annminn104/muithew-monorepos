import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TickerStarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.004 4H9.996C6.218 4 4.33 4 3.156 5.172c-.88.877-1.1 2.154-1.156 4.322-.007.278.221.5.49.571A2.001 2.001 0 013.986 12c0 .929-.634 1.71-1.494 1.935-.27.07-.498.292-.49.57.055 2.17.276 3.446 1.154 4.323C4.33 20 6.218 20 9.996 20h4.008c3.778 0 5.667 0 6.84-1.172.88-.877 1.1-2.154 1.156-4.322.007-.279-.221-.5-.49-.571A2.002 2.002 0 0120.014 12c0-.929.634-1.71 1.494-1.935.27-.07.498-.293.49-.57-.055-2.17-.276-3.446-1.154-4.323C19.67 4 17.782 4 14.004 4z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M11.146 10.023C11.526 9.34 11.716 9 12 9c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176z'
      />
    </SvgIcon>
  );
}

export default TickerStarIcon;
