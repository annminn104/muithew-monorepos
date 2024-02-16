import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BroomIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M22.53 2.53a.75.75 0 00-1.06-1.06l1.06 1.06zM3.19 12.63l.64-.39-.64.39zm-.741-1.219l-.668.341.012.025.015.024.64-.39zM4.11 5.997l.35.663-.35-.663zm3.069-1.279l.206.721-.206-.721zm5.963-.575l.53-.53-.184-.184-.257-.031-.09.745zM11.37 20.81l.39-.64-.39.64zm1.219.742l-.39.64.024.015.025.012.34-.668zm5.414-1.662l-.663-.35.663.35zm1.279-3.069l.721.206-.721-.206zm.575-5.963l.745-.089-.03-.257-.184-.184-.53.53zM21.47 1.47l-2.358 2.357 1.06 1.06L22.53 2.53l-1.06-1.06zm-7.583 3.418a3.695 3.695 0 015.225 0l1.06-1.06a5.195 5.195 0 00-7.346 0l1.06 1.06zm5.225 0a3.695 3.695 0 010 5.226l1.061 1.06a5.195 5.195 0 000-7.347l-1.06 1.06zM3.83 12.24l-.74-1.219-1.282.78.74 1.218 1.282-.78zm.63-5.58c.922-.486 1.935-.938 2.925-1.22l-.412-1.443c-1.124.321-2.237.822-3.213 1.337l.7 1.326zm2.925-1.22a16.334 16.334 0 015.564-.563 5.382 5.382 0 01.1.01h.004l.088-.744.09-.745h-.001-.004l-.009-.002a4.528 4.528 0 00-.135-.013 16.715 16.715 0 00-1.751-.043c-1.137.031-2.693.18-4.358.657l.412 1.442zm-4.268 5.63c-.799-1.563-.273-3.556 1.343-4.41l-.7-1.326C1.36 6.6.64 9.519 1.78 11.752l1.337-.682zm7.863 10.381l1.219.741.78-1.281-1.219-.742-.78 1.282zm7.686-1.21c.515-.976 1.016-2.09 1.337-3.214l-1.442-.412c-.283.99-.735 2.003-1.221 2.925l1.326.7zm1.337-3.214a17.829 17.829 0 00.614-6.11 6.742 6.742 0 00-.01-.105l-.003-.03-.002-.008v-.003-.001l-.745.088-.744.09v-.001.003a4.48 4.48 0 01.01.1 15.199 15.199 0 01.038 1.576 16.333 16.333 0 01-.6 3.989l1.442.412zm-7.755 5.192c2.233 1.14 5.15.421 6.418-1.979l-1.326-.7c-.854 1.616-2.847 2.142-4.41 1.344l-.682 1.335zm.363-17.546l6.716 6.716 1.06-1.06-6.715-6.717-1.06 1.061zM2.55 13.019a25.198 25.198 0 008.431 8.432l.78-1.282a23.697 23.697 0 01-7.93-7.93l-1.281.78z'
      />
    </SvgIcon>
  );
}

export default React.memo(BroomIcon);
