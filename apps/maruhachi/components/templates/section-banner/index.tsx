'use client';

import SwiperArrow from '@components/molecules/swiper-arrow';
import { Grid } from '@mui/material';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { AnimateUtils } from 'utils';
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
  return (
    <S.BannerSwiper
      modules={[A11y, Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      grabCursor={true}
      slidesPerView={1}
      autoplay
      loop={true}
      navigation
      effect='fade'
    >
      {i18n.slides.map((slide) => (
        <S.BannerSwiperSlide key={slide.key} style={{ backgroundImage: `url(${slide.background})` }}>
          <S.BannerBox>
            <S.BannerWrap maxWidth='lg'>
              <Grid container>
                <Grid item xs={12}>
                  <S.BannerContent>
                    {/* <S.BannerSubtitle variant='h4' {...AnimateUtils.fadeIn(0.4)}>
                      {slide.subtitle}
                    </S.BannerSubtitle> */}
                    <S.BannerTitle variant='h1' dangerouslySetInnerHTML={{ __html: slide.title }} {...AnimateUtils.fadeIn(0.3)} />
                    <S.BannerDesc variant='h5' {...AnimateUtils.fadeIn(0.5)} dangerouslySetInnerHTML={{ __html: slide.description }} />
                    <S.BannerButton type='button' variant='maruhachi' size='large' color='warning' {...AnimateUtils.fadeIn(0.6)}>
                      {slide.button}
                    </S.BannerButton>
                  </S.BannerContent>
                </Grid>
              </Grid>
            </S.BannerWrap>
          </S.BannerBox>
        </S.BannerSwiperSlide>
      ))}
      <S.BannerSwiperArrow>
        <SwiperArrow />
      </S.BannerSwiperArrow>
    </S.BannerSwiper>
  );
};

export default SectionBanner;
