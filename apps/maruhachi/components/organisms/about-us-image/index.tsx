import React from 'react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';

import Image from 'next/image';
import * as S from './styles';

type AboutUsImageProps = {
  i18n: Pick<SectionAboutUsProps, 'image'>;
};

const AboutUsImage: React.FC<AboutUsImageProps> = ({ i18n: { image } }) => {
  return (
    <S.AboutUsImgWrap>
      <Image {...image} />
    </S.AboutUsImgWrap>
  );
};

export default AboutUsImage;
