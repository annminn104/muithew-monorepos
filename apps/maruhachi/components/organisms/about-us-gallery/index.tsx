'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, EffectCards } from 'swiper/modules';

import { SectionAboutUsProps } from '@components/templates/section-about-us';

import * as S from './styles';

type AboutUsGalleryProps = {
  i18n: Pick<SectionAboutUsProps, 'gallery'>;
};

const AboutUsGallery: React.FC<AboutUsGalleryProps> = ({ i18n: { gallery } }) => {
  return (
    <S.AboutUsImgWrap>
      <S.AboutUsImgSwiper effect='cards' grabCursor={true} modules={[EffectCards, Autoplay]} autoplay loop={true} className='mySwiper'>
        {Array.from({ length: 9 }, (_, index) => (
          <S.AboutUsImgItem key={index}>
            <Image src={`https://source.unsplash.com/random/${index}`} width={300} height={420} alt={`Maruhachi Nousan About Us image ${index}`} />
          </S.AboutUsImgItem>
        ))}
      </S.AboutUsImgSwiper>
    </S.AboutUsImgWrap>
  );
};

export default AboutUsGallery;
