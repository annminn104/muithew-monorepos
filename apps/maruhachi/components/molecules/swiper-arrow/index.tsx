import React from 'react';
import { useSwiper } from 'swiper/react';

import { AltArrowLeftIcon, AltArrowRightIcon } from '@styles/ui-mui/icons';
import * as S from './styles';

type SwiperArrowProps = {};

const SwiperArrow: React.FC<SwiperArrowProps> = () => {
  const swiper = useSwiper();

  return (
    <S.SwiperArrowWrap className='swiper-arrow'>
      <S.SwiperArrowBtn onClick={() => swiper.slidePrev()} size='large' className='swiper-arrow-left'>
        <AltArrowLeftIcon fontSize='large' />
      </S.SwiperArrowBtn>
      <S.SwiperArrowBtn onClick={() => swiper.slideNext()} size='large' className='swiper-arrow-right'>
        <AltArrowRightIcon fontSize='large' />
      </S.SwiperArrowBtn>
    </S.SwiperArrowWrap>
  );
};

export default SwiperArrow;
