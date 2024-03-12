'use client';

import React from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';

import * as S from './styles';

type AboutUsImageProps = {
  i18n: Pick<SectionAboutUsProps, 'image'>;
};

const AboutUsImage: React.FC<AboutUsImageProps> = ({ i18n: { image } }) => {
  return (
    <S.AboutUsImgWrap>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} loop={true} className='mySwiper'>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </S.AboutUsImgWrap>
  );
};

export default AboutUsImage;
