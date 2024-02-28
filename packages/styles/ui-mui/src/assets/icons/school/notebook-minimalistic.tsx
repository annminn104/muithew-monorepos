import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function NotebookMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M20.082 3.018l.026.75-.026-.75zm-3.582.47l-.215-.72v.001l.215.718zm-2.826 1.315l-.376-.65.376.65zM3.982 3.075l-.046.748.046-.748zM7 3.487l.191-.725L7 3.487zm3.282 1.388l-.35.663.35-.663zm3.346 15.194l.352.662-.352-.662zM17 18.633l-.191-.725.191.725zm2.985-.41l.047.748-.047-.748zm-9.613 1.846l-.352.662.352-.662zM7 18.633l.191-.725-.191.725zm-2.985-.41l-.047.748.047-.748zm-1.265-2.08V4.999h-1.5v11.146h1.5zm20 0V4.934h-1.5v11.21h1.5zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439l-.052-1.499zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246l-.43-1.437zM3.936 3.823c.966.06 2.06.175 2.873.39l.382-1.45c-.96-.254-2.176-.376-3.163-.437l-.092 1.497zm2.873.39c.962.254 2.146.809 3.123 1.325l.7-1.326c-.995-.526-2.304-1.15-3.44-1.45l-.383 1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.373l-.382-1.45c-1.17.309-2.526.962-3.534 1.5l.705 1.323zm3.211-1.373c.803-.211 1.882-.327 2.841-.387l-.094-1.497c-.98.062-2.179.183-3.13.434l.383 1.45zm-6.466.05c-1.008-.538-2.363-1.191-3.534-1.5l-.382 1.45c.992.262 2.22.845 3.21 1.373l.706-1.324zm-3.534-1.5c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.387l.383-1.45zm14.059-1.764c0 .685-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827h-1.5zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165h1.5zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.827l.094-1.497c-.744-.046-1.312-.645-1.312-1.33h-1.5zm12.025 3.263a2.724 2.724 0 01-2.55 0l-.705 1.324a4.224 4.224 0 003.96 0l-.705-1.324zm.023-15.253a2.77 2.77 0 01-2.665.058l-.701 1.326a4.27 4.27 0 004.117-.086l-.75-1.298zM2.75 4.998c0-.697.552-1.213 1.186-1.175l.092-1.497C2.47 2.231 1.25 3.5 1.25 4.998h1.5z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 5.5v15' />
    </SvgIcon>
  );
}

export default NotebookMinimalisticIcon;
