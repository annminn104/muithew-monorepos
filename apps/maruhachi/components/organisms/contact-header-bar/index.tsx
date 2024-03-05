import { useTranslations } from 'next-intl';

import { contactHeaderBarMock } from '@mocks';
import { Typography } from '@mui/material';

import * as S from './styles';

const ContactHeaderBar = () => {
  const t = useTranslations('mainLayout.header.contactBar');

  return (
    <S.ContactHeaderBarWrap>
      <S.ContactHeaderBarInfo>
        {contactHeaderBarMock.info.map((inf) => (
          <S.ContactHeaderBarInfoItem key={inf.key}>
            {inf.icon}
            <Typography variant='caption'>{t(`info.${inf.i18n}`)}</Typography>
          </S.ContactHeaderBarInfoItem>
        ))}
      </S.ContactHeaderBarInfo>
    </S.ContactHeaderBarWrap>
  );
};

export default ContactHeaderBar;
