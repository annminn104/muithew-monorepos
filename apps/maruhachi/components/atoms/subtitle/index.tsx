import React from 'react';
import { AnimateUtils } from 'utils';

import * as S from './styles';

type SubtitleProps = {
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return (
    <S.SubtitleText variant='h5' {...AnimateUtils.fadeIn(0.4)}>
      {text}
    </S.SubtitleText>
  );
};

export default Subtitle;
