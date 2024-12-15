import React from 'react';
import { AnimateUtils } from 'utils';

import * as S from './styles';

type SubtitleProps = {
  text: string;
  variant?: 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
};

const Subtitle: React.FC<SubtitleProps> = ({ text, variant = 'h5' }) => {
  return (
    <S.SubtitleText variant={variant} {...AnimateUtils.fadeIn(0.4)}>
      {text}
    </S.SubtitleText>
  );
};

export default Subtitle;
