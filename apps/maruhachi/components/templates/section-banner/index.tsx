'use client';

import { Grid } from '@mui/material';
import { A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import * as S from './styles';

interface ISlide {
  key: string;
  subtitle: string;
  title: string;
  description: string;
  button: string;
  background: string;
}

type BannerProps = {
  i18n: { slides: Array<ISlide> };
};

const SectionBanner: React.FC<BannerProps> = ({ i18n }) => {
  const createEffect = {
    prev: { shadow: true, translate: [0, 0, -400] },
    next: { translate: ['100%', 0, 0] }
  };

  return (
    <S.BannerSwiper
      modules={[A11y, Navigation, Pagination, Scrollbar, Autoplay, EffectCreative]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      creativeEffect={createEffect}
      grabCursor={true}
      slidesPerView={1}
      loop={true}
      navigation
      effect='creative'
    >
      {i18n.slides.map((slide) => (
        <S.BannerSwiperSlide key={slide.key} style={{ backgroundImage: `url(${slide.background})` }}>
          <S.BannerBox>
            <S.BannerWrap maxWidth='lg'>
              <Grid container>
                <Grid item xs={12}>
                  <S.BannerContent>
                    <S.BannerSubtitle variant='h4'>{slide.subtitle}</S.BannerSubtitle>
                    <S.BannerTitle variant='h1' dangerouslySetInnerHTML={{ __html: slide.title }} />
                    <S.BannerDesc variant='h5'>{slide.description}</S.BannerDesc>
                    <S.BannerButton type='button' variant='contained' size='large' color='warning'>
                      {slide.button}
                    </S.BannerButton>
                  </S.BannerContent>
                </Grid>
              </Grid>
            </S.BannerWrap>
          </S.BannerBox>
        </S.BannerSwiperSlide>
      ))}
    </S.BannerSwiper>
  );
};

export default SectionBanner;
