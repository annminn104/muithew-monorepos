import React from 'react';

import ContactForm from '@components/organisms/contact-form';
import ContactInfo from '@components/organisms/contact-info';
import ContactMap from '@components/organisms/contact-map';
import { Divider, Grid } from '@mui/material';

import * as S from './styles';

type INextLink = { key: string; href: string; label: string; isBlank: boolean };

export type SectionContentProps = {
  title: string;
  info: Array<INextLink>;
  social: Array<INextLink>;
  map: { iframe: string };
};

const SectionContact: React.FC<SectionContentProps> = ({ title, info, social, map }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <S.SecContactTitle variant='h3'>{title}</S.SecContactTitle>
      </Grid>
      <Grid item xs={12}>
        <ContactForm />
      </Grid>
      <Grid item xs={12}>
        <Divider>Or</Divider>
      </Grid>
      <Grid item xs={12}>
        <ContactInfo i18n={{ info, social }} />
      </Grid>
      <Grid item xs={12}>
        <ContactMap i18n={{ map }} />
      </Grid>
    </Grid>
  );
};

export default SectionContact;
