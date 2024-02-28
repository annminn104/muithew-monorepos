import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function KeyMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M18.977 5.023l.53-.53-.53.53zm0 9.767l.53.53-.53-.53zM7.146 12.668l-.53-.53.53.53zM3.433 16.38l.53.53-.53-.53zm4.187 4.187l-.53-.53.53.53zm3.712-3.713l-.53-.53.53.53zm-8.323.736l-.745.083.745-.083zm.232 2.089l-.745.083.745-.083zm1.08 1.08l-.083.745.083-.745zm2.089.232l.082-.745-.082.745zm-2.886-.723l.53-.53-.53.53zm.208.208l-.53.53.53-.53zm3.672-8.845l-.726.187.726-.187zm4.965 4.965l-.187.726.187-.726zm-4.73.467a.75.75 0 10-1.055 1.066l1.054-1.066zm5.477-6.18a1.25 1.25 0 010-1.767l-1.06-1.06a2.75 2.75 0 000 3.889l1.06-1.061zm1.768 0a1.25 1.25 0 01-1.768 0l-1.06 1.062a2.75 2.75 0 003.889 0l-1.061-1.061zm0-1.767a1.25 1.25 0 010 1.768l1.06 1.06a2.75 2.75 0 000-3.889l-1.06 1.061zm1.06-1.06a2.75 2.75 0 00-3.889 0l1.061 1.06a1.25 1.25 0 011.768 0l1.06-1.06zm2.503-2.503a6.157 6.157 0 010 8.707l1.06 1.06a7.657 7.657 0 000-10.827l-1.06 1.06zm1.06-1.06a7.657 7.657 0 00-10.828 0l1.06 1.06a6.157 6.157 0 018.708 0l1.06-1.06zM6.615 12.138L2.903 15.85l1.06 1.06L7.677 13.2l-1.06-1.061zm1.535 8.959l1.24-1.24-1.06-1.061-1.24 1.24 1.06 1.06zm1.24-1.24l2.472-2.473-1.06-1.06-2.472 2.472 1.06 1.06zm-7.126-2.184l.232 2.089 1.49-.166-.232-2.088-1.49.165zm1.974 3.831l2.089.232.165-1.49-2.088-.232-.166 1.49zm-1.244-.706l.208.208 1.06-1.06-.208-.209-1.06 1.061zm1.41-.784a.237.237 0 01-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498l.166-1.49zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.237.237 0 01-.067-.142l-1.491.166zm4.593.274a.73.73 0 01-.597.21l-.165 1.49a2.23 2.23 0 001.823-.64l-1.06-1.06zM2.903 15.85a2.23 2.23 0 00-.64 1.823l1.491-.165a.73.73 0 01.21-.597l-1.06-1.06zm5.228-4.405A6.153 6.153 0 019.74 5.553l-1.06-1.06a7.653 7.653 0 00-2.002 7.325l1.453-.373zm10.316 2.815a6.154 6.154 0 01-5.892 1.61l-.373 1.452a7.653 7.653 0 007.325-2.001l-1.06-1.06zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455l1.06 1.06zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32l1.06 1.06zm1.711 5.594l-1.749-1.73-1.054 1.066 1.749 1.73 1.054-1.066z'
      />
    </SvgIcon>
  );
}

export default KeyMinimalisticIcon;
