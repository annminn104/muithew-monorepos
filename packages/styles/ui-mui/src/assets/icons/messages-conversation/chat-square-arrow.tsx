import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChatSquareArrowIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M12.978 21.456l.643.385-.643-.385zm.488-.814l-.643-.386.643.386zm-2.932 0l-.643.385.643-.385zm.488.814l.643-.386-.643.386zM12 4.222l-.527-.533a.75.75 0 000 1.067L12 4.222zm8.25 7.556a.75.75 0 001.5 0h-1.5zM3.343 16.59l.691-.29-.691.29zm4.868 2.736l-.013.75.013-.75zm-2.433-.33l-.284.693.284-.694zm14.88-2.406l.691.29-.692-.29zm-4.869 2.736l-.012-.75.012.75zm2.433-.33l.284.693-.284-.694zm.63-14.119l-.39.642.39-.642zm1.485 1.467l.637-.395-.637.395zM5.149 4.877l-.389-.642.389.642zM3.663 6.344l-.637-.395.637.395zm6 13.176l.373-.65-.373.65zm5.114-16.986a.75.75 0 10-1.054-1.068l1.054 1.068zm-1.054 4.444a.75.75 0 101.054-1.067l-1.054 1.067zm-4.42-2.005a.75.75 0 10-.005-1.5l.004 1.5zm12.433 9.492a.75.75 0 00-1.499-.04l1.5.04zm-8.115 7.376l.488-.814-1.286-.77-.488.813 1.286.771zm-3.73-.814l.488.814 1.286-.77-.488-.815-1.286.771zm2.444.043a.378.378 0 01-.335.18.378.378 0 01-.335-.18l-1.286.771c.726 1.212 2.516 1.212 3.242 0l-1.286-.77zM3.75 12.667v-.89h-1.5v.89h1.5zm-1.5 0c0 1.025 0 1.832.045 2.483.045.659.14 1.214.356 1.73l1.383-.58c-.126-.301-.203-.672-.243-1.253-.04-.588-.041-1.335-.041-2.38h-1.5zm5.973 5.909c-1.13-.02-1.71-.09-2.161-.275l-.568 1.388c.738.302 1.574.367 2.704.387l.025-1.5zM2.651 16.88a5.222 5.222 0 002.843 2.81l.568-1.39a3.722 3.722 0 01-2.028-2l-1.383.58zm13.151 3.196c1.13-.02 1.966-.085 2.704-.387l-.568-1.388c-.45.184-1.031.256-2.161.275l.025 1.5zm4.164-3.776a3.722 3.722 0 01-2.028 2l.568 1.39a5.222 5.222 0 002.843-2.81l-1.383-.58zM12 4.972c1.48 0 2.895 0 4.074.08.588.04 1.1.099 1.518.182.43.085.71.187.87.285l.778-1.284c-.38-.23-.859-.373-1.355-.472-.507-.101-1.089-.165-1.71-.207-1.24-.084-2.71-.084-4.175-.084v1.5zm9.75 6.806c0-1.44 0-2.574-.086-3.48-.089-.916-.273-1.676-.69-2.349l-1.274.79c.245.397.393.898.47 1.704.08.816.08 1.865.08 3.335h1.5zm-3.287-6.26c.505.306.928.725 1.237 1.222l1.274-.791a5.223 5.223 0 00-1.734-1.714l-.777 1.284zM3.75 11.779c0-1.47 0-2.519.08-3.335.077-.806.225-1.307.47-1.703l-1.274-.791c-.418.673-.601 1.433-.69 2.35-.087.905-.086 2.039-.086 3.479h1.5zm1.01-7.543A5.223 5.223 0 003.026 5.95l1.274.79a3.723 3.723 0 011.237-1.22L4.76 4.235zm6.417 16.021c-.181-.303-.344-.576-.503-.792a2.07 2.07 0 00-.638-.594l-.747 1.3c.03.018.081.054.178.185.106.144.227.344.424.672l1.286-.77zm-2.98-.18c.397.006.644.011.831.032.174.019.232.046.26.062l.748-1.3a2.107 2.107 0 00-.845-.253c-.271-.03-.599-.035-.968-.041l-.025 1.5zm5.912.951a9.32 9.32 0 01.424-.672c.097-.131.147-.167.178-.185l-.747-1.3a2.07 2.07 0 00-.638.594c-.159.216-.322.489-.503.792l1.286.771zm1.668-2.451c-.37.006-.697.011-.968.04-.285.032-.57.096-.845.254l.747 1.3c.029-.016.087-.043.26-.062.188-.02.435-.026.831-.032l-.025-1.5zm-3.25-13.82l2.25-2.222-1.054-1.068-2.25 2.223 1.054 1.067zm-1.054 0l2.25 2.222 1.054-1.067-2.25-2.222-1.054 1.067zM9.298 3.473c-2.236.007-3.368.054-4.538.762l.777 1.284c.758-.459 1.46-.539 3.765-.546l-.004-1.5zm10.939 10.951c-.026.957-.102 1.472-.271 1.876l1.383.58c.284-.678.361-1.434.387-2.415l-1.499-.04z'
      ></path>
    </SvgIcon>
  );
}

export default ChatSquareArrowIcon;
