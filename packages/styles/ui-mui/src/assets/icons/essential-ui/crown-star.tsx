import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CrownStarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21.609 13.562l.23-2.436c.18-1.912.27-2.869-.058-3.264a.992.992 0 00-.675-.367c-.476-.042-1.073.638-2.268 1.998-.618.704-.927 1.055-1.271 1.11-.191.03-.386-.001-.562-.09-.319-.16-.53-.595-.955-1.464l-2.237-4.584C13.011 2.822 12.61 2 12 2c-.61 0-1.011.822-1.813 2.465L7.95 9.049c-.424.87-.636 1.304-.955 1.464a.925.925 0 01-.562.09c-.344-.055-.653-.406-1.271-1.11-1.195-1.36-1.792-2.04-2.268-1.998a.992.992 0 00-.675.367c-.327.395-.237 1.352-.057 3.264l.229 2.436c.378 4.012.566 6.019 1.75 7.228C5.322 22 7.094 22 10.64 22h2.719c3.545 0 5.317 0 6.5-1.21 1.183-1.21 1.371-3.216 1.749-7.228z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M11.146 12.523c.38-.682.57-1.023.854-1.023.284 0 .474.341.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.136l.19.043c.738.167 1.107.25 1.195.533.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.354-.032.104-.021.215 0 .438l.02.204c.076.784.114 1.177-.115 1.351-.23.175-.576.016-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135-.104 0-.202.045-.399.135l-.178.082c-.691.319-1.037.478-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.043c.21-.048.315-.072.4-.136.084-.063.138-.16.246-.354l.098-.176z'
      />
    </SvgIcon>
  );
}

export default React.memo(CrownStarIcon);
