import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StretchingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11.5' cy='4.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 17.5L6 22' />
      <path
        fill={linearColor}
        d='M10.375 11.246l.747.075-.747-.075zm-.162 1.622l.747.074-.747-.074zm3.79-1.532l-.48.576.48-.576zm.081.068l.48-.577-.48.577zm3.832 0l-.48-.577.48.577zm1.564-.328a.75.75 0 00-.96-1.152l.96 1.152zm-5.252 8.988l.747-.066-.747.066zm-.575 2.002a.75.75 0 001.494-.133l-1.494.133zm1.661-9.79l-.257.704.257-.705zm1.372 0l.257.704-.257-.705zm-4.592-2.034l-.18.728.18-.728zm.148.056l-.242.71.242-.71zm1.24.627l.428-.615-.429.615zm-1.665 5.21l.397-.635-.397.636zm1.664 1.237l-.584.47.584-.47zm.398.649l-.683.308.683-.308zm-3.674-3.462l-.716.224.716-.224zm.269.548l-.615.43.615-.43zm.011-4.423l.683.312-.682-.312zm.824-.58l-.065-.748.065.747zm-1.68 1.068l-.162 1.621 1.492.15.163-1.622-1.493-.15zm3.894.74l.081.068.96-1.153-.08-.067-.961 1.152zm4.873.068l1.084-.904-.96-1.152-1.084.903.96 1.153zm-4.915 8.15l.172 1.936 1.494-.133-.172-1.935-1.494.133zm.123-8.15c.555.462.973.825 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743l-.96 1.153zm3.832-1.153c-.65.54-.833.68-1.007.744l.514 1.409c.48-.175.898-.538 1.453-1l-.96-1.153zm-2.38 2.153a2.75 2.75 0 001.887 0l-.514-1.41a1.25 1.25 0 01-.858 0l-.514 1.41zm-3.142-2.01h.002v.001h-.002l-.01-.003-.026-.008a.817.817 0 01-.193-.093.757.757 0 01-.238-.26.75.75 0 01.358-1.05l.033-.013a.773.773 0 00-.216.127.75.75 0 00.196 1.27l.053.021c.033.013.074.027.129.046l.485-1.42a3.003 3.003 0 01-.081-.028l.008.003a.613.613 0 01.137.08.75.75 0 01-.136 1.285c-.027.013-.056.023-.043.018l.033-.013a.747.747 0 00.45-.708.749.749 0 00-.442-.664.827.827 0 00-.11-.04l-.02-.005-.007-.002-.36 1.456zm2.57-.21c-.227-.19-.366-.305-.574-.45l-.857 1.231c.147.103.238.178.47.37l.96-1.151zM12 11.008c.297.102.795.354 1.053.533l.857-1.231a6.776 6.776 0 00-1.425-.721L12 11.008zm-.58 5.764c.942.589 1.257.797 1.477 1.07l1.168-.94c-.415-.517-.997-.87-1.85-1.402l-.796 1.272zm3.555 3.226c-.089-1.002-.14-1.681-.412-2.285l-1.367.616c.143.319.187.695.285 1.802l1.494-.133zm-2.078-2.156c.12.149.22.312.299.487l1.367-.616a3.75 3.75 0 00-.498-.812l-1.168.941zm-3.43-5.049c-.08.802-.156 1.42.022 1.99l1.432-.447c-.066-.21-.055-.459.039-1.394l-1.493-.149zm2.747 2.707c-.796-.498-1-.643-1.125-.822l-1.23.859c.342.49.878.808 1.56 1.235l.795-1.272zm-2.725-.717c.084.269.209.523.37.754l1.23-.859a1.246 1.246 0 01-.168-.342l-1.432.447zm1.633-3.462c.014-.147.022-.218.031-.271.007-.039.012-.048.015-.054l-1.365-.624c-.13.286-.15.557-.174.8l1.493.149zm1.152-1.807c-.199-.049-.376-.093-.524-.122a1.828 1.828 0 00-.506-.036l.13 1.494c-.02.002-.005-.003.093.016.1.019.232.051.447.104l.36-1.456zm-1.106 1.482c-.007.015-.007.009.013-.014a.505.505 0 01.175-.123c.028-.012.034-.01.017-.009l-.129-1.494a1.776 1.776 0 00-.846.33c-.221.156-.459.388-.595.686l1.365.624z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 22V8M8 10l-1.672.557A1.942 1.942 0 005 12.4c0 .368.208.704.537.868L8 14.5'
      />
    </SvgIcon>
  );
}

export default StretchingIcon;
