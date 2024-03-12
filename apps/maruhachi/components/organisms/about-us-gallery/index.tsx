'use client';

import React from 'react';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';
import { Grid } from '@mui/material';

import * as S from './styles';

type AboutUsGalleryProps = {
  i18n: Pick<SectionAboutUsProps, 'galleries'>;
};

const AboutUsGallery: React.FC<AboutUsGalleryProps> = ({ i18n: { galleries } }) => {
  return (
    <S.AboutUsGalleryWrap container spacing={4}>
      <Grid item xs={12}>
        <Swiper modules={[A11y, Scrollbar, Autoplay]} scrollbar={{ draggable: false }} grabCursor={true} slidesPerView={4} spaceBetween={24} autoplay>
          {galleries.map((gall, index) => (
            <SwiperSlide key={index}>
              <S.AboutUsGalleryItem>
                <S.AboutUsGalleryImg {...gall} />
                <S.AboutUsGalleryName variant='h6'>{gall.name}</S.AboutUsGalleryName>
                <S.AboutUsGalleryPosition variant='h6'>{gall.position}</S.AboutUsGalleryPosition>
              </S.AboutUsGalleryItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </S.AboutUsGalleryWrap>
  );
};

export default AboutUsGallery;
