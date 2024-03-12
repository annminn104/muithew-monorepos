import React from 'react';

import * as S from './styles';

type SubtitleProps = {
  text: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <S.SubtitleText variant='h5'>{text}</S.SubtitleText>;
};

export default Subtitle;
