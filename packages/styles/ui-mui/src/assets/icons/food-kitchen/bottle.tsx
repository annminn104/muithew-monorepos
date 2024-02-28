import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BottleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M18.45 8.278l.748-.06-.747.06zm.015.188l.749-.048-.749.048zM16.614 12.9l.495.563-.495-.563zm.137-.122l.505.554-.505-.554zm-6.68-3.82l.738.127-.739-.127zm.032-.185l.737.139-.737-.14zm2.884-3.786l.331.673-.33-.673zm-.162.081l.342.667-.342-.667zm-5.093 8.398l-.526-.535.526.535zm.128-.127l.532.529-.532-.53zm2.179-4.2l.737.135-.737-.135zm4.002 8.127l.732.166-.732-.166zm.041-.179l-.73-.174.73.174zm2.397-4.068l.502.557-.502-.557zM7.65 20.412l.387-.642-.387.642zM5.462 18.81l-.621.42.621-.42zm1.486-4.573l.525.535-.525-.535zm-1.77 2.079l-.7-.267.7.267zm3.138 4.497l-.387.642.387-.642zm2.424 1.176l-.07.747.07-.747zm3.053-3.628l-.731-.166.731.166zm-.84 2.638l.597.453-.598-.453zM18.34 2.9l.387-.643-.387.642zm.41.308l.633-.404-.632.404zm-.123.764l.656.363-.656-.363zm.202-.473l-.75-.033.75.034zm-2.383-.772l-.656-.363.656.363zm.313-.448l.413.626-.413-.626zm.8.15l-.387.643.387-.643zm-.495-.231l.045-.749-.045.749zm-1.431 1.942l2.152 1.297.774-1.285-2.152-1.297-.774 1.285zM8.703 20.17l-.665-.4-.774 1.285.665.4.774-1.285zm4.607-3.07l-.248 1.095 1.463.331.248-1.094-1.463-.331zm-5.837-2.328L8.258 14l-1.052-1.07-.784.771 1.051 1.07zm5.845-9.112l3.032-1.49-.661-1.346-3.032 1.49.661 1.346zm4.106-.807l.28 3.485 1.494-.12-.279-3.485-1.495.12zm-.748-.993l.426-.77-1.312-.727-.427.77 1.313.727zm.496-.79l.78.47.774-1.284-.78-.47-.774 1.285zm.798.538l-.455.822 1.313.726.455-.822-1.313-.726zm-.267 4.73l.014.176 1.497-.096-.016-.2-1.495.12zm-.594 5.125l.147-.13-1.01-1.11-.128.114.991 1.126zm.608-4.95c.09 1.419-.46 2.789-1.471 3.71l1.01 1.11c1.358-1.238 2.076-3.055 1.958-4.915l-1.497.096zm-6.908.572l.03-.173-1.473-.278c-.01.052-.02.106-.035.197l1.478.254zm1.848-4.771c-.08.04-.129.063-.175.087l.685 1.334.151-.075-.661-1.346zM10.84 8.912c.262-1.392 1.128-2.561 2.327-3.177l-.685-1.334c-1.626.835-2.772 2.403-3.116 4.233l1.474.278zM8.258 14c.063-.062.1-.097.134-.132L7.328 12.81c-.027.028-.056.056-.122.12L8.258 14zM9.33 8.832a16.65 16.65 0 01-.03.173l1.475.27c.01-.05.018-.1.033-.19l-1.478-.253zm-.939 5.037a8.743 8.743 0 002.384-4.594l-1.475-.27a7.244 7.244 0 01-1.973 3.806l1.064 1.058zm6.38 3.564l.04-.171-1.46-.348-.042.188 1.463.331zm1.346-5.095l-.141.125 1.004 1.114.128-.113-.99-1.126zm-1.306 4.924a7.197 7.197 0 012.169-3.685l-1.004-1.114a8.697 8.697 0 00-2.624 4.451l1.459.348zM8.038 19.77c-.631-.38-1.07-.646-1.395-.874-.322-.226-.472-.377-.559-.506l-1.243.84c.236.35.558.625.939.893.378.266.872.563 1.484.932l.774-1.285zm-1.616-6.068c-.513.505-.927.91-1.234 1.259-.31.35-.56.694-.71 1.088l1.401.534c.056-.148.17-.332.433-.629.264-.3.633-.662 1.161-1.182l-1.051-1.07zm-.338 4.688a1.986 1.986 0 01-.205-1.807l-1.402-.534a3.486 3.486 0 00.364 3.18l1.243-.839zm1.845 3.065c.612.369 1.105.667 1.516.876.412.21.807.366 1.225.405l.14-1.494c-.14-.013-.335-.07-.685-.248-.351-.18-.79-.444-1.422-.824l-.774 1.285zm5.133-3.26c-.167.737-.285 1.253-.401 1.644-.117.389-.213.584-.306.707l1.195.906c.254-.335.413-.732.548-1.184.134-.45.264-1.025.427-1.742l-1.463-.33zm-2.392 4.54a3.233 3.233 0 002.88-1.283l-1.196-.906a1.733 1.733 0 01-1.543.696l-.14 1.494zm7.283-19.194l.143.087c.038.024.061.04.075.05.029.02-.012-.004-.052-.068l1.264-.807a1.259 1.259 0 00-.337-.344c-.096-.07-.214-.14-.32-.203l-.773 1.285zm1.33.793c.06-.108.126-.227.175-.335.053-.116.111-.274.12-.467l-1.499-.067c.004-.076.027-.116.013-.085l-.041.08-.08.148 1.312.726zm-1.165-.724a.25.25 0 01-.039-.145l1.499.067a1.25 1.25 0 00-.195-.729l-1.264.807zm-1.016-.52l.088-.158c.024-.042.04-.067.05-.083.022-.033 0 .01-.068.055l-.826-1.252c-.17.113-.28.254-.354.365-.069.103-.138.23-.202.346l1.312.726zm.844-1.304c-.113-.069-.237-.144-.349-.2a1.26 1.26 0 00-.488-.138l-.09 1.497c-.08-.004-.122-.031-.087-.014l.085.047.155.093.774-1.285zm-.774 1.118a.25.25 0 01-.153.041l.09-1.497a1.25 1.25 0 00-.763.204l.826 1.252z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 9.5l1.452-.726a2.704 2.704 0 012.9.307 2.704 2.704 0 002.544.454L18.5 9'
      />
    </SvgIcon>
  );
}

export default BottleIcon;
