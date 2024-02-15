import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TrellisIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 22v-.5M5 22v-.5M12 21v-6' />
      <path
        fill={linearColor}
        d='M2.879 20.121l-.53.53.53-.53zm-.877-4.12l-.75.003.75-.004zm19.12 4.12l.53.53-.53-.53zm.876-4.12l.75.003-.75-.004zM16 20.25H8v1.5h8v-1.5zm-8 0c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5zm-6.748-4.246c.006 1.082.032 1.983.167 2.72.14.758.404 1.403.93 1.928l1.06-1.061c-.243-.244-.41-.572-.515-1.138-.108-.589-.136-1.364-.142-2.457l-1.5.008zM16 21.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L20.59 19.59c-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103v1.5zm5.248-5.754c-.006 1.093-.034 1.868-.142 2.457-.104.567-.272.895-.515 1.138l1.06 1.06c.526-.524.79-1.17.93-1.927.135-.737.161-1.638.167-2.72l-1.5-.008zM3 15.75h18v-1.5H3v1.5zm19.748.254A1.747 1.747 0 0021 14.25v1.5c.14 0 .249.113.248.246l1.5.008zm-19.996-.008c-.001-.133.108-.246.248-.246v-1.5c-.964 0-1.754.782-1.748 1.754l1.5-.008z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.5 15V6.137c0-.387 0-.581-.018-.714-.123-.916-.636-1.478-1.537-1.683-.13-.03-.402-.055-.945-.104-1.002-.091-2.183-.44-3.231-.821C13.275 2.27 12.529 2 12 2c-.529 0-1.275.271-2.769.815-1.048.38-2.23.73-3.231.82-.543.05-.814.075-.945.105-.9.205-1.414.767-1.537 1.683-.018.133-.018.327-.018.714V15'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 18h2M7 18h2M14.5 11l-1 1m0-4l-3 3m0-4l-1 1' />
    </SvgIcon>
  );
}

export default React.memo(TrellisIcon);