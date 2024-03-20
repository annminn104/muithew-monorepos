import { SectionIntroductionProps } from '@components/templates/section-introduction';

import React from 'react';
import { AnimateUtils } from 'utils';
import * as S from './styles';

type IntroductionImageProps = {
  i18n: Pick<SectionIntroductionProps, 'images'>;
};

const IntroductionImage: React.FC<IntroductionImageProps> = ({ i18n }) => {
  return (
    <S.IntroWrap>
      <S.IntroVertical>
        <S.IntroVerticalImg {...i18n.images.vertical} quality={100} {...AnimateUtils.fadeDirection('left', 0.4, 200)} />
        <S.IntroVerticalLogo {...i18n.images.logo} quality={100} {...AnimateUtils.fadeIn(0.7)} />
      </S.IntroVertical>
      <S.IntroHorizontal>
        <S.IntroHorizontalImg {...i18n.images.horizontal} quality={100} {...AnimateUtils.fadeDirection('left', 0.6, 300)} />
      </S.IntroHorizontal>
    </S.IntroWrap>
  );
};

export default IntroductionImage;
