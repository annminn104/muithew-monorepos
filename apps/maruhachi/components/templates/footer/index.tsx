import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import * as S from './styles';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations('mainLayout.footer');

  return (
    <S.FooterWrapper maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <S.FooterText dangerouslySetInnerHTML={{ __html: t.raw('text') }} />
        </Grid>
      </Grid>
    </S.FooterWrapper>
  );
};

export default Footer;
