import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PaintRulerIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M6.75 6.799l-.375.65.375-.65zm-.549-.549l-.65.375.65-.375zm11.598 0l.65.375-.65-.375zm-.549.549l.375.65-.375-.65zm0-4.598l.375-.65-.375.65zm.549.549l.65-.375-.65.375zM6.75 2.201l-.375-.65.375.65zm-.549.549l-.65-.375.65.375zm7.506 18.957l-.53-.53.53.53zm0-7.414l-.53.53.53-.53zm-3.414 0l-.53-.53.53.53zm0 7.414l.53-.53-.53.53zm5.114-10.718l-.112-.742.112.742zm4.076-.612l-.111-.741.111.742zm2.378-4.61l.698-.274-.698.274zM20.733 4.64l-.275.698.275-.698zm.205 5.405l-.351-.663.351.663zm.948-1.1l.707.25-.707-.25zm-9.401 2.973l-.569-.49.569.49zM12.005 14v.75h.737l.013-.738-.75-.012zM5.5 3.75a.75.75 0 000 1.5v-1.5zm3-1h7v-1.5h-7v1.5zm7 3.5h-7v1.5h7v-1.5zm-7 0c-.481 0-.792 0-1.027-.022-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273.32.029.71.028 1.163.028v-1.5zM5.25 4.5c0 .454 0 .844.028 1.163.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A12.807 12.807 0 016.75 4.5h-1.5zm1.875 1.65a.75.75 0 01-.275-.275l-1.299.75c.198.342.482.626.824.824l.75-1.3zM17.25 4.5c0 .481 0 .792-.022 1.027-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962.029-.32.028-.71.028-1.163h-1.5zM15.5 7.75c.454 0 .844 0 1.163-.028.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a12.81 12.81 0 01-1.027.022v1.5zm1.65-1.875a.75.75 0 01-.275.275l.75 1.299a2.25 2.25 0 00.824-.824l-1.3-.75zM15.5 2.75c.481 0 .792 0 1.027.022.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273-.32-.029-.71-.028-1.163-.028v1.5zm3.25 1.75c0-.454 0-.844-.028-1.163-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348.021.235.022.546.022 1.027h1.5zm-1.875-1.65a.75.75 0 01.274.275l1.3-.75a2.25 2.25 0 00-.824-.824l-.75 1.3zM8.5 1.25c-.454 0-.844 0-1.163.028-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079.235-.021.546-.022 1.027-.022v-1.5zM6.75 4.5c0-.481 0-.792.022-1.027.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962-.029.32-.028.71-.028 1.163h1.5zm-.375-2.949a2.25 2.25 0 00-.824.824l1.3.75a.75.75 0 01.274-.275l-.75-1.299zM10.75 20v-4h-1.5v4h1.5zm2.5-4v4h1.5v-4h-1.5zm0 4c0 .493-.002.787-.03.997a.702.702 0 01-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04.045-.334.043-.747.043-1.197h-1.5zM12 22.75c.45 0 .863.002 1.197-.043.356-.048.731-.16 1.04-.47l-1.06-1.06-.003.001a.702.702 0 01-.177.042c-.21.028-.504.03-.997.03v1.5zm0-8c.493 0 .787.002.997.03a.702.702 0 01.18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47-.334-.045-.747-.043-1.197-.043v1.5zM14.75 16c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.702.702 0 01.042.177c.028.21.03.504.03.997h1.5zm-4 0c0-.493.002-.787.03-.997a.702.702 0 01.043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5zM12 13.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.702.702 0 01.177-.042c.21-.028.504-.03.997-.03v-1.5zM9.25 20c0 .45-.002.863.043 1.197.048.356.16.731.47 1.04l1.06-1.06-.001-.003a.702.702 0 01-.042-.177c-.028-.21-.03-.504-.03-.997h-1.5zM12 21.25c-.493 0-.787-.002-.997-.03a.702.702 0 01-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47.334.045.747.043 1.197.043v-1.5zm3.518-9.52l4.076-.61-.222-1.484-4.077.611.223 1.484zm3.527-7.98H18v1.5h1.045v-1.5zm3.705 3.705c0-.435 0-.797-.019-1.094a2.825 2.825 0 00-.172-.868l-1.396.55c.03.073.056.186.071.416.016.236.016.541.016.996h1.5zM19.045 5.25c.455 0 .76 0 .996.016.23.015.343.042.417.07l.55-1.395a2.826 2.826 0 00-.87-.172c-.296-.02-.658-.019-1.093-.019v1.5zm3.514.243a2.75 2.75 0 00-1.552-1.552l-.55 1.396c.324.127.58.382.706.705l1.396-.55zm-2.965 5.626c.71-.106 1.252-.177 1.696-.413l-.703-1.325c-.162.086-.387.13-1.215.255l.223 1.483zm1.656-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739h-1.5zm.04 3.251a2.75 2.75 0 001.303-1.513l-1.414-.5a1.25 1.25 0 01-.592.688l.703 1.325zm-5.995-.459c-.793.12-1.457.218-1.98.365-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351.41-.116.965-.2 1.797-.325l-.223-1.484zm-2.54 3.765c.017-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56l1.5.025zM12 14.75h.005v-1.5H12v1.5zm-6-11h-.5v1.5H6v-1.5z'
      />
    </SvgIcon>
  );
}

export default PaintRulerIcon;
