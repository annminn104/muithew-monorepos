import { IImageNext } from 'global';
import React from 'react';

import AboutUsContent from '@components/organisms/about-us-content';
import AboutUsGallery from '@components/organisms/about-us-gallery';
import AboutUsImage from '@components/organisms/about-us-image';
import { Grid } from '@mui/material';

import * as S from './styles';

export type SectionAboutUsProps = {
  content: {
    subtitle: string;
    title: string;
    description: string;
    content: Array<string>;
    button: string;
  };
  image: IImageNext;
  galleries: Array<IImageNext & { name: string; position: string }>;
};

const SectionAboutUs: React.FC<SectionAboutUsProps> = ({ content, image, galleries }) => {
  return (
    <S.SecAboutUsWrap>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <AboutUsContent i18n={{ content }} />
        </Grid>
        <Grid item xs={6}>
          <AboutUsImage i18n={{ image }} />
        </Grid>
        <Grid item xs={12}>
          <AboutUsGallery i18n={{ galleries }} />
        </Grid>
      </Grid>
    </S.SecAboutUsWrap>
  );
};

export default SectionAboutUs;
