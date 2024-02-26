'use client';

import { Grid, List } from '@mui/material';
import * as S from './styles';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <S.FooterWrapper maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <S.FooterLogo>
            <S.FooterLogoImg />
            <S.FooterLogoName variant='h6'>Maruhachinousan</S.FooterLogoName>
          </S.FooterLogo>
        </Grid>
        <Grid item xs={3}>
          <List></List>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </S.FooterWrapper>
  );
};

export default Footer;
