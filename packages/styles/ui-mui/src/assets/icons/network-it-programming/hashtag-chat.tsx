import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HashtagChatIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M17.543 21.694l-.645-.382.645.382zm.271-.458l.646.382-.646-.382zm-1.628 0l-.646.382.646-.382zm.27.458l.646-.382-.645.382zm-4.266-2.737l.693-.287-.693.287zm2.705 1.539l-.013.75.013-.75zm-1.352-.186l-.287.693.287-.693zm8.267-1.353l.693.287-.693-.287zm-2.705 1.539l-.013-.75.013.75zm1.352-.186l.287.693-.287-.693zm.35-7.942l-.393.64.392-.64zm.825.826l.64-.392-.64.392zm-8.438-.826l-.392-.64.392.64zm-.826.826l-.64-.392.64.392zm3.333 7.411l.377-.648-.377.648zm2.488 1.47l.27-.457-1.29-.764-.271.458 1.29.764zm-2.649-.457l.271.458 1.291-.764-.271-.458-1.29.764zm1.358-.306A.126.126 0 0117 21.25c.027 0 .075.016.102.062l-1.29.764c.531.899 1.845.899 2.377 0l-1.291-.764zm-.648-8.562h1.5v-1.5h-1.5v1.5zm5 3.5v.5h1.5v-.5h-1.5zm-8.5.5v-.5h-1.5v.5h1.5zm-1.5 0c0 .572 0 1.039.025 1.419.027.387.083.738.222 1.075l1.386-.574c-.05-.123-.09-.293-.111-.603a21.535 21.535 0 01-.022-1.317h-1.5zm3.658 2.996c-.628-.01-.892-.052-1.078-.13l-.574 1.387c.475.196.998.232 1.626.243l.026-1.5zm-3.41-.502a3.25 3.25 0 001.758 1.759l.574-1.386a1.75 1.75 0 01-.947-.947l-1.386.574zm9.752-2.494c0 .593 0 1-.022 1.317-.021.31-.06.48-.111.603l1.386.574c.139-.337.195-.688.221-1.075.026-.38.026-.847.026-1.419h-1.5zm-2.132 4.496c.628-.011 1.15-.047 1.626-.243l-.574-1.386c-.186.077-.45.118-1.078.129l.026 1.5zm1.999-2.576a1.75 1.75 0 01-.947.947l.574 1.386a3.25 3.25 0 001.759-1.76l-1.386-.573zm-3.367-5.92c.833 0 1.405 0 1.846.043.429.04.655.115.818.215l.784-1.28c-.438-.268-.921-.377-1.46-.429-.529-.05-1.184-.049-1.988-.049v1.5zm5 3.5c0-.804 0-1.46-.05-1.987-.05-.54-.16-1.023-.429-1.461l-1.279.784c.1.163.174.39.215.819.042.44.043 1.012.043 1.845h1.5zm-2.336-3.242c.236.144.434.342.578.578l1.28-.784a3.25 3.25 0 00-1.074-1.073l-.784 1.279zM16.25 11.25c-.804 0-1.46 0-1.987.05-.54.05-1.023.16-1.461.429l.784 1.279c.163-.1.39-.174.819-.215.44-.042 1.012-.043 1.845-.043v-1.5zm-3.5 5c0-.833 0-1.405.043-1.845.04-.43.115-.656.215-.82l-1.28-.783c-.268.438-.377.921-.429 1.46-.05.529-.049 1.184-.049 1.988h1.5zm.052-4.521a3.25 3.25 0 00-1.073 1.073l1.279.784c.144-.236.342-.434.578-.578l-.784-1.28zm4.029 9.125c-.098-.165-.197-.335-.297-.472a1.489 1.489 0 00-.456-.425l-.754 1.296c-.037-.021-.04-.04-.002.013.048.065.106.162.218.352l1.291-.764zm-1.95.392c.227.004.346.006.43.016.071.008.053.014.013-.009l.754-1.296a1.495 1.495 0 00-.601-.186c-.17-.019-.37-.022-.57-.025l-.025 1.5zm3.579.372c.112-.19.17-.287.218-.352.039-.053.035-.034-.002-.013l-.754-1.296c-.206.12-.347.276-.456.425-.1.137-.2.306-.297.472l1.29.764zm.632-1.872c-.198.003-.399.006-.569.025-.184.02-.393.064-.601.186l.754 1.296c-.04.023-.058.017.012.009.085-.01.204-.012.43-.016l-.026-1.5z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M10 3L5 21M19 3l-1.805 6.5M22 9H4M2 16h7' />
    </SvgIcon>
  );
}

export default HashtagChatIcon;
