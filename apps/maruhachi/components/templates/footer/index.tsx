import { Grid } from '@mui/material';

import { useTranslations } from 'next-intl';
import { followUsMock } from './mock';
import * as S from './styles';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations('mainLayout.footer');

  return (
    <S.FooterWrapper maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <S.FooterLogo>
            <S.FooterLogoImg />
            <S.FooterLogoName variant='body2'>{t('companyName')}</S.FooterLogoName>
          </S.FooterLogo>
        </Grid>
        <Grid item xs={4}>
          <S.FooterTitle variant='body1'>{t('followUs')}</S.FooterTitle>
          {followUsMock.map((item, index) => (
            <div key={item.key + index}>{item.icon}</div>
          ))}
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </S.FooterWrapper>
  );
};

export default Footer;
