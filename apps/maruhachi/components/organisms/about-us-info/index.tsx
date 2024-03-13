import React from 'react';

import { SectionAboutUsProps } from '@components/templates/section-about-us';
import { Grid } from '@mui/material';

import * as S from './styles';

type AboutUsInfoProps = {
  i18n: Pick<SectionAboutUsProps, 'info'>;
};

const AboutUsInfo: React.FC<AboutUsInfoProps> = ({
  i18n: {
    info: { name, position, image, quote }
  }
}) => {
  return (
    <Grid container spacing={8} alignItems='center'>
      <Grid item xs={5}>
        <S.AboutUsInfoLeft>
          <S.AboutUsInfoImage {...image} />
          <S.AboutUsInfoName variant='h4'>{name}</S.AboutUsInfoName>
          <S.AboutUsInfoPosition variant='h5'>{position}</S.AboutUsInfoPosition>
        </S.AboutUsInfoLeft>
      </Grid>
      <Grid item xs={7}>
        <S.AboutUsInfoRight>
          <S.AboutUsInfoQuote variant='body1' as='div' dangerouslySetInnerHTML={{ __html: quote }} />
        </S.AboutUsInfoRight>
      </Grid>
    </Grid>
  );
};

export default AboutUsInfo;
