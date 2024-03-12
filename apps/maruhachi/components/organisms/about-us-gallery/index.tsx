import React from 'react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';

import { Grid } from '@mui/material';
import * as S from './styles';

type AboutUsGalleryProps = {
  i18n: Pick<SectionAboutUsProps, 'galleries'>;
};

const AboutUsGallery: React.FC<AboutUsGalleryProps> = ({ i18n: { galleries } }) => {
  return (
    <S.AboutUsGalleryWrap container spacing={4}>
      {galleries.map((gall, index) => (
        <Grid item xs={3} key={index}>
          <S.AboutUsGalleryItem>
            <S.AboutUsGalleryImg {...gall} />
            <S.AboutUsGalleryName variant='h6'>{gall.name}</S.AboutUsGalleryName>
            <S.AboutUsGalleryPosition variant='h6'>{gall.position}</S.AboutUsGalleryPosition>
          </S.AboutUsGalleryItem>
        </Grid>
      ))}
    </S.AboutUsGalleryWrap>
  );
};

export default AboutUsGallery;
