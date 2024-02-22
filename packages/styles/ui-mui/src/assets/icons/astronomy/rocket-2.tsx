import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Rocket2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M22 5.365h.75H22zM9.455 13.303l.529-.532-.53.532zm0-4.76l.529.532-.53-.531zm5.974 5.95l-.53-.532.53.532zm-4.78 0l-.529.531.53-.531zm9.866-5.066l.53.532-.53-.532zM22 5.858h-.75.75zm-7.459-2.38l-.529-.531.53.531zm-2.168 9.167a.75.75 0 10-1.058-1.063l1.058 1.063zM7.71 10.282l.53-.53V9.75l-.53.531zm3.729-3.488a.75.75 0 10.81-1.262l-.81 1.262zm-.142-.983l-.406.631.406-.63zM9.06 4.666l.11-.742-.11.742zM4.796 7.234l.53.531-.53-.531zm2.71-2.37l.287.693-.288-.693zM5.35 8.453l.276-.698-.276.698zm.107.043l-.285.693.285-.693zm1.415.954l.53-.532-.53.532zm-.082-.081l-.522.538.522-.538zm-1.77-1.047l-.275.698.276-.698zm8.714 8.015l-.53.531a.713.713 0 00.036.034l.494-.565zm4.713-4.631a.75.75 0 10-1.258.816l1.258-.816zm-.276.953l-.629.408.63-.408zm1.151 2.226l.742-.11-.742.11zm-2.579 4.246l.53.532-.53-.532zm2.38-2.698l.692.29-.692-.29zm-3.432 2.576l.696-.278-.696.278zm-.413-.949l-.657.361.657-.36zm-1.089-1.324l.53-.532-.018-.017-.018-.015-.494.564zm.712.753l.59-.463-.59.463zm1.769 1.715l-.53-.531.53.531zm-3.18-3.11l-.26-.705.26.704zm-5.629-5.659l.696.28-.696-.28zm-1.784 2.982a.75.75 0 00-1.06-1.061l1.06 1.061zm-2.222 1.16l-.53-.531.53.53zM2.32 13.04l-.53-.53.53.53zm.683.377a.75.75 0 00-1.06-1.061l1.06 1.061zm8.604 5.57a.75.75 0 10-1.06-1.061l1.06 1.06zm-2.222 1.159l.53.53-.53-.53zm1.538 1.536l.53.53-.53-.53zm.684.377a.75.75 0 10-1.06-1.061l1.06 1.06zm-.973-4.873a.75.75 0 00-1.06-1.06l1.06 1.06zM7.47 18.227a.75.75 0 001.06 1.061l-1.06-1.06zm.387-3.814a.75.75 0 10-1.06-1.06l1.06 1.06zM4.68 15.47a.75.75 0 101.061 1.06l-1.06-1.06zM7.46 17.58a.75.75 0 10-1.048-1.072l1.048 1.072zm-2.758.6a.75.75 0 101.049 1.072l-1.049-1.072zm15.284-9.285L14.9 13.96l1.059 1.063 5.086-5.065-1.058-1.063zm-8.808 5.065l-1.194-1.19-1.059 1.063 1.195 1.19 1.059-1.063zM9.985 9.075L15.07 4.01l-1.058-1.063-5.087 5.065 1.059 1.063zm8.142-6.325h.495v-1.5h-.495v1.5zm3.124 2.615v.493h1.5v-.493h-1.5zM18.62 2.75c.818 0 1.356.002 1.755.055.378.05.516.135.6.22l1.06-1.064c-.41-.408-.918-.57-1.46-.643-.522-.07-1.179-.068-1.954-.068v1.5zm4.13 2.615c0-.772.002-1.426-.069-1.946-.073-.542-.236-1.049-.647-1.458l-1.058 1.063c.084.084.168.22.219.595.053.397.055.932.055 1.746h1.5zM9.984 12.771c-.579-.575-.958-.955-1.201-1.273-.231-.301-.268-.457-.268-.575h-1.5c0 .58.244 1.053.577 1.487.32.417.785.878 1.333 1.424l1.059-1.063zm.136 2.253c.548.546 1.012 1.01 1.43 1.328.436.331.91.573 1.489.573v-1.5c-.121 0-.279-.038-.581-.268-.32-.242-.701-.62-1.28-1.196l-1.058 1.063zM21.045 9.96c.688-.686 1.19-1.168 1.454-1.802l-1.384-.576c-.123.294-.353.542-1.129 1.315l1.058 1.063zm.205-4.101c0 1.093-.013 1.43-.135 1.723l1.385.576c.263-.634.25-1.329.25-2.299h-1.5zM15.07 4.01c.776-.773 1.026-1.002 1.322-1.125L15.82 1.5c-.636.262-1.119.762-1.808 1.448L15.07 4.01zm3.056-2.76c-.975 0-1.671-.013-2.306.249l.572 1.386c.296-.122.637-.135 1.734-.135v-1.5zM10.58 14.43l1.792-1.785-1.058-1.063-1.792 1.784 1.058 1.063zm1.668-8.898l-.548-.351-.81 1.261.547.352.81-1.262zm-.548-.351c-.539-.347-.979-.63-1.359-.835-.389-.21-.76-.361-1.172-.422l-.22 1.484c.176.026.374.094.681.259.317.17.7.416 1.26.775l.81-1.261zM5.325 7.765c.49-.488 1.014-1.01 1.485-1.438.234-.214.447-.396.628-.536.193-.148.308-.215.355-.234l-.575-1.386c-.236.098-.479.265-.695.431-.227.175-.474.389-.724.616-.5.456-1.048 1.002-1.532 1.484l1.058 1.063zM9.17 3.924a3.694 3.694 0 00-1.952.247l.575 1.386a2.194 2.194 0 011.158-.15l.219-1.483zM4.746 9.02l.33.13.551-1.395-.33-.13-.551 1.395zm1.598.961l.836.832 1.058-1.062-.836-.833-1.058 1.063zm-1.269-.83l.098.038.57-1.387-.116-.047-.552 1.395zm2.327-.233l-.089-.088L6.27 9.907l.075.074 1.058-1.063zm-2.23.271c.409.168.781.412 1.097.718L7.313 8.83a4.976 4.976 0 00-1.57-1.028l-.57 1.387zm-.905-2.487a1.414 1.414 0 00.479 2.318l.552-1.395a.086.086 0 01.027.14L4.267 6.702zm12.923 5.82l.353.545 1.259-.816-.354-.545-1.258.816zm-.975 6.078l-.073.073 1.058 1.063.073-.073-1.058-1.063zm1.328-5.533c.36.556.608.938.779 1.253.166.306.233.502.26.676l1.483-.221c-.062-.413-.215-.783-.425-1.17-.205-.379-.49-.817-.838-1.354l-1.259.816zm-.27 6.596c.485-.482 1.033-1.029 1.49-1.526.23-.249.443-.495.62-.721.166-.215.334-.457.433-.693l-1.384-.579c-.02.046-.085.16-.235.352-.14.18-.323.392-.538.626-.43.468-.954.99-1.444 1.478l1.058 1.063zm1.308-4.667c.056.377.007.775-.15 1.148l1.385.579a3.658 3.658 0 00.249-1.948l-1.484.22zm-3.897 1.176l-.455-.399-.988 1.129.455.398.988-1.128zm1.704 2.56c-.186-.467-.3-.758-.451-1.033l-1.315.722c.097.177.174.368.373.866l1.393-.556zm-2.727-1.465c.38.38.526.526.65.685l1.18-.926c-.193-.247-.416-.467-.772-.822l-1.058 1.063zm2.276.432a4.966 4.966 0 00-.445-.673l-1.18.926c.116.148.22.305.31.47l1.315-.723zm1.352-9.687a.945.945 0 01-1.331 0l-1.059 1.063a2.445 2.445 0 003.448 0L17.29 8.012zm-1.331 0a.928.928 0 010-1.316l-1.059-1.063a2.428 2.428 0 000 3.442l1.059-1.063zm0-1.316a.945.945 0 011.331 0l1.058-1.063a2.445 2.445 0 00-3.448 0l1.059 1.063zm1.331 0a.928.928 0 010 1.316l1.058 1.063a2.428 2.428 0 000-3.442L17.29 6.696zm-1.147 11.977a.15.15 0 01.131-.042c.038.008.09.039.115.1l-1.393.556c.361.904 1.53 1.12 2.205.449l-1.058-1.063zm-1.243-4.712c-.445.444-.777.774-1.062 1.02-.285.246-.47.358-.605.408l.517 1.408c.389-.143.735-.394 1.068-.68.334-.29.709-.663 1.14-1.093L14.9 13.961zm-1.667 1.428a.54.54 0 01-.193.036v1.5c.247 0 .483-.044.71-.128l-.518-1.408zm1.033.418l-.245-.245-1.06 1.062.245.244 1.06-1.061zm-5.34-7.795c-.421.42-.789.785-1.074 1.111-.285.324-.535.66-.684 1.032l1.391.56c.056-.138.174-.322.42-.603.245-.279.571-.604 1.006-1.037L8.925 8.012zm-1.759 2.143a2.034 2.034 0 00-.151.768h1.5c0-.065.011-.13.043-.208l-1.391-.56zm.013.658l.153.153 1.06-1.061-.153-.154-1.06 1.062zm-2.16 1.543l-1.693 1.69 1.06 1.06 1.692-1.689-1.06-1.061zm-2.17 1.215l.153-.154-1.06-1.061-.153.153 1.06 1.062zm0 .475a.335.335 0 010-.475l-1.06-1.062a1.835 1.835 0 000 2.598l1.06-1.061zm.477 0a.338.338 0 01-.477 0l-1.06 1.06c.717.717 1.88.717 2.597 0l-1.06-1.06zm7.22 3.88l-1.692 1.69 1.06 1.06 1.692-1.69-1.06-1.06zm.906 4.287l.154-.154-1.06-1.061-.154.153 1.06 1.061zm-2.598 0c.717.716 1.88.716 2.598 0l-1.06-1.062a.338.338 0 01-.478 0l-1.06 1.061zm0-2.598a1.835 1.835 0 000 2.598l1.06-1.062a.335.335 0 010-.475l-1.06-1.06zm.718-3.49L7.47 18.227l1.06 1.061 2.103-2.102-1.06-1.06zm-2.776-2.772L4.68 15.47l1.061 1.06 2.117-2.117-1.06-1.06zm-.384 3.156l-1.71 1.672 1.049 1.072 1.71-1.672-1.05-1.072z'
      />
    </SvgIcon>
  );
}

export default React.memo(Rocket2Icon);
