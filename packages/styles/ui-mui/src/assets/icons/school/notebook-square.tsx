import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function NotebookSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M16.557 6.022l-.037-.75.037.75zM14.7 6.27l-.2-.723.2.723zm-2.178 1l-.376-.65.376.65zM7.487 6.06l-.055.748.055-.748zM9 6.27l-.178.728L9 6.271zm2.465 1.022l-.349.664.349-.664zm1.042 8.43l.35.663-.35-.664zM15 14.684l-.178-.728.178.728zm1.49-.208l.056.748-.056-.748zm-4.997 1.245l-.35.664.35-.664zM9 14.685l.178-.728-.178.728zm-1.49-.208l-.056.748.056-.748zm-.76-1.566V7.496h-1.5v5.415h1.5zm12 0V7.45h-1.5v5.46h1.5zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.194 1.693-.223l-.073-1.498zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.752 2.002-.926l-.4-1.446zm-7.068 1.26c.5.037 1.007.098 1.39.191l.356-1.457c-.505-.123-1.11-.19-1.636-.23l-.11 1.497zM8.822 7c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.323-1.713-.862-2.635-1.087L8.822 7zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102l.699 1.327zm2.321-.972c.377-.092.875-.152 1.368-.19l-.112-1.495c-.52.039-1.114.106-1.612.228l.356 1.457zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972l.7-1.327zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189l.356-1.457zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314h-1.5zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68h1.5zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818h-1.5zm6.908 2.148a.341.341 0 01-.316 0l-.699 1.327a1.84 1.84 0 001.714 0l-.7-1.327zm-.012-8.438a.348.348 0 01-.333.008l-.697 1.328a1.848 1.848 0 001.782-.037l-.752-1.299zm-5.396.875c0-.426.333-.713.682-.687l.11-1.496c-1.294-.095-2.292.962-2.292 2.183h1.5z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 7.585V16M2 9c0-3.771 0-5.657 1.172-6.828C4.343 1 6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172C22 3.343 22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13V9z'
      />
    </SvgIcon>
  );
}

export default React.memo(NotebookSquareIcon);