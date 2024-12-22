import { IImageNext } from 'global';
import React from 'react';

import AboutUsContent from '@components/organisms/about-us-content';
import AboutUsGallery from '@components/organisms/about-us-gallery';
import AboutUsInfo from '@components/organisms/about-us-info';
import { Grid } from '@mui/material';

import * as S from './styles';

export type SectionAboutUsProps = {
  content: {
    subtitle: string;
    title: string;
    tab: { description: string; content: Array<string> }[];
    button: string;
  };
  gallery: Array<IImageNext>;
  info: {
    name: string;
    position: string;
    image: IImageNext;
    quote: string;
  };
};

const SectionAboutUs: React.FC<SectionAboutUsProps> = ({ content, gallery, info }) => {
  return (
    <S.SecAboutUsWrap>
      <Grid container spacing={8} alignItems='center'>
        <Grid item xs={12} md={6}>
          <AboutUsContent i18n={{ content }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutUsGallery i18n={{ gallery }} />
        </Grid>
        <Grid item xs={12}>
          <AboutUsInfo i18n={{ info }} />
        </Grid>
      </Grid>
    </S.SecAboutUsWrap>
  );
};

export default SectionAboutUs;
