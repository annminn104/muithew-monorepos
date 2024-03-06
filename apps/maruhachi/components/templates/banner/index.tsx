'use client';

import { Grid } from '@mui/material';
import { A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import * as S from './styles';

interface ISlide {
  key: React.Key;
  subtitle: string;
  title: string;
  description: string;
  button: string;
}

type BannerProps = {
  i18n: { slide: Array<ISlide> };
};

const Banner: React.FC<BannerProps> = ({ i18n }) => {
  return (
    <S.BannerSwiper
      modules={[A11y, Navigation, Pagination, Scrollbar, Autoplay, EffectCreative]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      creativeEffect={{
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: ['100%', 0, 0] }
      }}
      // centeredSlides={true}
      grabCursor={true}
      effect='creative'
      loop={true}
    >
      {i18n.slide.map((slide, index) => (
        <S.BannerSwiperSlide key={slide.key} style={{ backgroundImage: `url(https://source.unsplash.com/random/${index})` }}>
          <S.BannerWrap maxWidth='xl'>
            <Grid container>
              <Grid item xs={12}>
                {slide.title}
              </Grid>
            </Grid>
          </S.BannerWrap>
        </S.BannerSwiperSlide>
      ))}
    </S.BannerSwiper>
  );
};

export default Banner;
