import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import { followUsMock, FooterKey } from './mock';
import * as S from './styles';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations('mainLayout.footer');

  const footerTrans = {
    [FooterKey.PhoneNumber]: t('phoneNumber')
  };

  return (
    <S.FooterWrapper maxWidth='lg'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <S.FooterLogo>
            <S.FooterLogoImg>Logo</S.FooterLogoImg>
            <S.FooterLogoName variant='body2'>{t('companyName')}</S.FooterLogoName>
          </S.FooterLogo>
        </Grid>
        <Grid item xs={4}>
          <S.FooterInfoTitle variant='body1'>{t('followUs')}</S.FooterInfoTitle>
          {followUsMock.map((item) => (
            <S.FooterInfoContent key={item.key}>
              {item.icon} {footerTrans[item.key]}
            </S.FooterInfoContent>
          ))}
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </S.FooterWrapper>
  );
};

export default Footer;
