import React from 'react';

import ContactInfo from '@components/organisms/contact-info';
import ContactMap from '@components/organisms/contact-map';
import { Grid } from '@mui/material';

type INextLink = { key: string; href: string; label: string; isBlank: boolean };

export type SectionContentProps = {
  title: string;
  info: Array<INextLink>;
  social: Array<INextLink>;
  map: { iframe: string };
};

const SectionContact: React.FC<SectionContentProps> = ({ title, info, social, map }) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <ContactInfo i18n={{ title, info, social }} />
      </Grid>
      <Grid item xs={12}>
        <ContactMap i18n={{ map }} />
      </Grid>
    </Grid>
  );
};

export default SectionContact;
