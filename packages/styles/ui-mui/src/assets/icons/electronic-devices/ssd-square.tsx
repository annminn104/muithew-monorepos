import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SSDSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 17v1M16.5 17v1M14 17v1M11.5 17v1' />
      <path
        fill={linearColor}
        d='M19 5.118l.72-.21-.002-.007-.003-.009-.715.226zm-14 0l-.715-.226-.003.009-.002.008.72.209zM2.889 20.643l.433-.612-.433.612zm-.552-.584l.634-.4-.634.4zm19.326 0l-.634-.4.634.4zm-.552.584l-.433-.612.433.612zm0-6.698l-.433.612.433-.612zm.552.584l-.634.4.634-.4zm-18.774-.584l.433.612-.433-.612zm-.552.584l.634.4-.634-.4zM7.5 3.75h9v-1.5h-9v1.5zm9 0c.428 0 .753.1 1.016.305.269.21.549.59.769 1.288l1.43-.45c-.28-.89-.698-1.57-1.277-2.021-.587-.457-1.261-.622-1.938-.622v1.5zm-9-1.5c-.676 0-1.351.165-1.938.622-.58.451-.997 1.13-1.277 2.02l1.43.45c.22-.697.5-1.077.77-1.287.262-.205.587-.305 1.015-.305v-1.5zm10.78 3.076l2.851 9.838 1.44-.417-2.85-9.838-1.441.417zm-14-.417l-2.852 9.838 1.44.418L5.72 5.325 4.28 4.91zm1.22 9.43h13v-1.5h-13v1.5zm13 5.911h-13v1.5h13v-1.5zm-13 0c-.719 0-1.198-.001-1.563-.04-.35-.038-.509-.104-.615-.18l-.866 1.225c.398.282.842.395 1.32.446.464.05 1.038.049 1.724.049v-1.5zm-4.25-2.956c0 .729 0 1.329.046 1.812.047.493.15.945.407 1.353l1.268-.8c-.08-.126-.145-.313-.182-.697-.038-.394-.039-.91-.039-1.668h-1.5zm2.072 2.737a1.313 1.313 0 01-.35-.372l-1.27.8c.198.313.453.584.754.796l.866-1.224zm17.928-2.737c0 .758 0 1.274-.039 1.668-.037.384-.103.57-.182.697l1.268.8c.258-.408.36-.86.407-1.353.047-.483.046-1.083.046-1.812h-1.5zM18.5 21.75c.686 0 1.26.001 1.723-.049.479-.052.923-.164 1.321-.446l-.866-1.224c-.106.075-.265.141-.615.179-.365.039-.844.04-1.563.04v1.5zm2.529-2.091c-.095.15-.215.275-.351.372l.866 1.224c.3-.212.556-.483.753-.796l-1.268-.8zm-2.529-5.32c.719 0 1.198 0 1.563.04.35.037.509.103.615.178l.866-1.224c-.398-.282-.842-.394-1.32-.446-.464-.05-1.038-.049-1.724-.049v1.5zm4.25 2.955c0-.729 0-1.329-.046-1.811-.047-.494-.15-.946-.407-1.354l-1.268.8c.08.127.145.313.182.697.038.394.039.91.039 1.668h1.5zm-2.072-2.737c.136.097.256.223.35.373l1.27-.8a2.811 2.811 0 00-.754-.797l-.866 1.224zM5.5 12.838c-.686 0-1.26 0-1.723.05-.479.05-.923.163-1.321.445l.866 1.224c.106-.075.265-.14.615-.178.365-.04.844-.04 1.563-.04v-1.5zm-2.75 4.456c0-.758 0-1.274.039-1.668.037-.384.103-.57.182-.696l-1.268-.8c-.258.407-.36.86-.407 1.353-.047.482-.046 1.082-.046 1.811h1.5zm-.294-3.961c-.3.212-.556.484-.753.796l1.268.8c.095-.15.215-.275.351-.372l-.866-1.224z'
      />
    </SvgIcon>
  );
}

export default React.memo(SSDSquareIcon);
