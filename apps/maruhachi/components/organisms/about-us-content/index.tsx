import React from 'react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';
import { CheckReadIcon } from '@styles/ui-mui/icons';
import * as S from './styles';

type AboutUsContentProps = {
  i18n: Pick<SectionAboutUsProps, 'content'>;
};

const AboutUsContent: React.FC<AboutUsContentProps> = ({
  i18n: {
    content: { subtitle, title, description, content, button }
  }
}) => {
  return (
    <S.AboutUsContentWrap>
      <S.AboutUsContentSubtitle text={subtitle} />
      <S.AboutUsContentTitle variant='h3'>{title}</S.AboutUsContentTitle>
      <S.AboutUsContentDesc variant='body1'>{description}</S.AboutUsContentDesc>
      {content.map((itm, index) => (
        <S.AboutUsContentItem key={index}>
          <CheckReadIcon />
          <S.AboutUsContentItemText>{itm}</S.AboutUsContentItemText>
        </S.AboutUsContentItem>
      ))}
      <S.AboutUsContentBtn variant='maruhachi'>{button}</S.AboutUsContentBtn>
    </S.AboutUsContentWrap>
  );
};

export default AboutUsContent;
