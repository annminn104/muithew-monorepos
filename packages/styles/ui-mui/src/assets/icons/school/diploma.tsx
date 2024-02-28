import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DiplomaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='16' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 19.26l-2.263 2.17c-.324.31-.486.465-.623.519-.313.122-.66.018-.824-.25-.072-.116-.095-.327-.14-.75-.025-.238-.038-.357-.077-.457a.827.827 0 00-.5-.48c-.104-.037-.229-.05-.477-.073-.44-.044-.661-.065-.783-.134a.617.617 0 01-.26-.79c.056-.132.218-.287.542-.598L8.073 17l1.04-1.04M12 19.26l2.263 2.17c.324.31.486.465.623.519.313.122.66.018.824-.25.072-.116.095-.327.14-.75.025-.238.038-.357.077-.457a.828.828 0 01.5-.48c.105-.037.229-.05.477-.073.44-.044.661-.065.783-.134a.617.617 0 00.26-.79c-.056-.132-.218-.287-.542-.598L15.926 17 15 16.073'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.32 17.996c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v4c0 2.828 0 4.243.879 5.121.768.769 1.946.865 4.121.877'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 6h6M7 9.5h10' />
    </SvgIcon>
  );
}

export default DiplomaIcon;
