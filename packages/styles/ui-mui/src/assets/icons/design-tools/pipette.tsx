import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PipetteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M10.531 19.291l-.53-.53.53.53zm.802-12.446l.53-.53-.53.53zm-1.092-1.092l-.53.53.53-.53zm2.184-2.183l.53-.53-.53.53zm1.091 1.091l-.53.53a.75.75 0 001.06 0l-.53-.53zm1.456-1.455l-.53-.53.53.53zm4.367 7.278l-.53-.53a.75.75 0 000 1.06l.53-.53zm1.091 1.091l-.53.53.53-.53zM4.71 13.47l-.53-.53.53.53zm-2.257 5.896l.53.53-.53-.53zm.629-.63l-.53-.53.53.53zm1.555 2.813l.53.53-.53-.53zm.628-.629l-.53-.53.53.53zM3.78 16.747l-.746.082.746-.082zm-.053-.476l.745-.082-.745.082zm3.527 3.95l-.083.746.083-.746zm.476.053l.082-.745-.082.745zm-2.214.404L6 21.25l-.485-.572zm1.392-.488l.022-.75-.022.75zM3.88 14.426l-.663-.351.663.35zm-.203.58l-.737-.14.737.14zm-.355 3.48L2.75 18l.572.485zm.488-1.393l.75-.022-.75.022zm5.764 3.027l.351.662-.35-.662zm-.58.203l.14.737-.14-.737zm4.183-7.385A.75.75 0 0012.117 14l1.06-1.06zm-1.207 4.915a.75.75 0 101.06-1.061l-1.06 1.06zm-.793-2.915A.75.75 0 0010.117 16l1.06-1.06zm.686-8.624l-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06zm6.914 6.914l-1.091-1.091-1.061 1.06 1.092 1.092 1.06-1.06zM11.894 4.1l1.092 1.092 1.06-1.06-1.091-1.093-1.06 1.061zm2.153 1.092l1.455-1.456-1.06-1.06-1.456 1.455 1.06 1.06zm6.217 3.306l-1.456 1.455 1.06 1.061 1.457-1.456-1.061-1.06zm-9.461-1.123l5.822 5.822 1.06-1.06-5.822-5.823-1.06 1.061zM5.239 14l6.624-6.624-1.06-1.06-6.624 6.623L5.239 14zm-2.256 5.896l.628-.629-1.06-1.06-.63.628 1.062 1.06zm2.183 2.183l.629-.629-1.061-1.06-.629.628 1.06 1.061zm-.642-5.414l-.053-.476-1.49.166.052.476 1.491-.166zm2.646 4.303l.476.053.165-1.491-.475-.053-.166 1.49zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283l1.06 1.06zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027l.166-1.491zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.808 2.808 0 00-1.9.666L6 21.25zm-4.078.828a2.294 2.294 0 003.244 0l-1.06-1.06a.794.794 0 01-1.123 0l-1.061 1.06zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778l-1.06-1.06zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488l1.491-.165zm-1.254-2.113a2.81 2.81 0 00-.277.792l1.473.279c.025-.129.068-.253.13-.369l-1.326-.702zM20.264 3.736a3.367 3.367 0 010 4.762l1.06 1.06c1.901-1.9 1.901-4.982 0-6.883l-1.06 1.061zm-4.762 0a3.367 3.367 0 014.762 0l1.06-1.06a4.867 4.867 0 00-6.882 0l1.06 1.06zm4.398 9.492a.794.794 0 01-1.123 0l-1.06 1.061a2.294 2.294 0 003.244 0L19.9 13.23zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205l1.061 1.061zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407l-1.49.165zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885l1.144.97zM10.773 4.1a.794.794 0 011.122 0l1.061-1.06a2.294 2.294 0 00-3.244 0l1.06 1.06zm-7.79 16.917a.794.794 0 010-1.122l-1.06-1.06a2.294 2.294 0 000 3.243l1.06-1.06zm7.79-15.794a.794.794 0 010-1.123L9.71 3.04a2.294 2.294 0 000 3.243l1.06-1.06zm10.189 9.066a2.294 2.294 0 000-3.244l-1.061 1.06c.31.31.31.813 0 1.123l1.06 1.061zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96l-1.06-1.061zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058l-.165 1.49zm1.577-1.563a1.31 1.31 0 01-.369.13l.28 1.473c.276-.052.543-.146.791-.277l-.702-1.326zm9.585-8.443l1.092 1.092 1.06-1.061-1.091-1.092-1.06 1.061zm-7.746 8.807l3.968-3.968-1.06-1.061L10 18.761l1.062 1.06zm3.968-3.968l2.656-2.656-1.061-1.06-2.655 2.655 1.06 1.06zm0-1.061l-1.853-1.854L12.117 14l1.853 1.854 1.06-1.061zm-2 2l-1.853-1.854L10.117 16l1.853 1.854 1.06-1.061z'
      />
    </SvgIcon>
  );
}

export default PipetteIcon;
