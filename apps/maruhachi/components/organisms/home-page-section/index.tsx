import React from 'react';

import { Grid } from '@mui/material';
import * as S from './styles';

type HomePageSectionProps = {
  children?: React.ReactNode;
  id: string;
};

const HomePageSection: React.FC<HomePageSectionProps> = ({ children, id }) => {
  return (
    <S.HomePageSection id={id}>
      <S.HomePageSectionWrap maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </S.HomePageSectionWrap>
    </S.HomePageSection>
  );
};

export default HomePageSection;
