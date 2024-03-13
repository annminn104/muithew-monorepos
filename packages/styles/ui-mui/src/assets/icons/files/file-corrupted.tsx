import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FileCorruptedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M13 2.5V5c0 2.357 0 3.536.732 4.268C14.464 10 15.643 10 18 10h4' />
      <path
        fill={linearColor}
        d='M15.397 4.054l-.501.557.501-.557zm3.96 3.563l-.501.557.501-.557zm2.303 2.537l-.685.305.685-.305zM3.172 20.828l.53-.53-.53.53zm17.663 0l-.53-.53.53.53zm-2.544-7.97l.416-.625-.416.624zm3.43 0l-.416-.625.416.624zm-12.004 0l-.416-.625.416.624zm2.572 0l.416-.625-.416.624zm-6.002 0l-.416.623.416-.624zm-2.572 0l-.416-.625.416.624zm14.576 4l.416-.625-.416.624zm3.43 0l.416.623-.416-.624zm-6.002 0l-.416-.625.416.624zm-3.43 0l.416-.625-.416.624zm-2.572 0l-.416-.625.416.624zm6.002-4l-.416-.625.416.624zm-9.432 4l-.416.623.416-.624zm-2.572 0l-.416-.625.416.624zm-.626.416l.416.625-.416-.625zm-.81 1.84l.729-.173-.73.174zm19.693-2.116l.749.03-.75-.03zm.028-4.67l.75-.015-.75.014zM2.214 18.072l.698.274-.698-.274zm-.208-5.83l.746-.084-.746.083zm1.454.777l.344.666-.344-.666zm10.544 8.23h-4.001v1.5h4v-1.5zM2.75 11.94V10h-1.5v1.94h1.5zM14.896 4.61l3.96 3.563 1.003-1.115-3.96-3.563-1.003 1.115zm3.96 3.563c1.354 1.218 1.853 1.688 2.12 2.285l1.37-.61c-.427-.957-1.232-1.66-2.487-2.79l-1.003 1.115zM10.032 2.75c1.583 0 2.18.012 2.712.216l.537-1.4c-.852-.328-1.78-.316-3.249-.316v1.5zm5.867.746c-1.086-.977-1.766-1.604-2.618-1.93l-.537 1.4c.533.204.982.592 2.152 1.645l1.003-1.115zM10.003 21.25c-1.908 0-3.263-.002-4.291-.14-1.006-.135-1.586-.389-2.01-.812l-1.06 1.06c.748.75 1.697 1.081 2.87 1.239 1.151.155 2.626.153 4.49.153v-1.5zm4 1.5c1.866 0 3.34.002 4.491-.153 1.173-.158 2.122-.49 2.87-1.238l-1.06-1.061c-.423.423-1.003.677-2.01.812-1.027.138-2.383.14-4.29.14v1.5zM2.75 10c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06C1.893 3.39 1.56 4.337 1.403 5.51 1.248 6.66 1.25 8.136 1.25 10h1.5zm7.282-8.75c-1.875 0-3.356-.002-4.512.153-1.177.158-2.13.49-2.878 1.238l1.06 1.061c.423-.423 1.005-.677 2.017-.812 1.033-.138 2.396-.14 4.313-.14v-1.5zm7.843 12.231c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 01-2.598 0l-.832 1.248zm-7.742 0a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm-4.262 0c1.29.86 2.971.86 4.262 0L9.3 12.233a2.342 2.342 0 01-2.598 0l-.832 1.248zm-1.74 0a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm13.744 4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 01-2.598 0l-.832 1.248zm-1.74 0a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm-4.262 0c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 01-2.598 0l-.832 1.248zm-1.74 0a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm6.002-4a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm-10.264 4c1.29.86 2.971.86 4.262 0L9.3 16.233a2.342 2.342 0 01-2.598 0l-.832 1.248zm6.002-4c1.29.86 2.971.86 4.262 0l-.832-1.248a2.342 2.342 0 01-2.598 0l-.832 1.248zm-7.742 4a1.57 1.57 0 011.74 0l.832-1.248a3.07 3.07 0 00-3.404 0l.832 1.248zm-.626.418l.626-.418-.832-1.248-.626.417.832 1.249zm-1.956 1.39c.195.818.526 1.503 1.093 2.07l1.06-1.061c-.325-.325-.547-.74-.694-1.357l-1.46.348zm19.673-2.322c-.077 1.864-.33 2.743-.918 3.331l1.06 1.06c1.03-1.028 1.279-2.447 1.357-4.33l-1.499-.061zm1.528-4.654c-.019-.992-.085-1.747-.404-2.464l-1.37.61c.187.421.256.912.274 1.882l1.5-.028zm-.613 1.168c.386-.257.622-.695.613-1.168l-1.5.028c0-.047.023-.086.055-.108l.832 1.248zm-19.464 3.17c-.239.158-.473.313-.657.47a1.697 1.697 0 00-.5.677l1.396.55a.063.063 0 01.01-.019.498.498 0 01.071-.07c.098-.084.244-.182.512-.36l-.832-1.249zm.335 2.29a4.208 4.208 0 01-.103-.496c-.006-.066 0-.08.007-.098l-1.396-.549c-.217.554-.071 1.054.033 1.49l1.459-.347zm19.129-1.46a.589.589 0 01-.915-.514l1.499.062a.911.911 0 00-1.416-.796l.832 1.248zM1.25 11.94c0 .139-.001.277.01.385l1.492-.166-.001-.039-.001-.18h-1.5zm2.049.293l-.15.1c-.036.023-.042.025-.034.02l.69 1.333c.096-.05.21-.128.326-.205l-.832-1.248zm-2.038.092a1.75 1.75 0 002.543 1.361l-.689-1.332a.25.25 0 01-.363-.195l-1.491.166z'
      />
    </SvgIcon>
  );
}

export default FileCorruptedIcon;