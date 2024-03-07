import { Typography } from '@mui/material';
import { contactHeaderBarMock } from 'mocks';

import React from 'react';
import * as S from './styles';

type ContactHeaderBarProps = {
  i18n: {
    contactBar: {
      info: {
        phoneNumber: string;
        email: string;
      };
      social: {
        facebook: string;
        messenger: string;
        instagram: string;
        whatsApp: string;
      };
    };
  };
};

const ContactHeaderBar: React.FC<ContactHeaderBarProps> = ({ i18n: { contactBar } }) => {
  return (
    <React.Fragment>
      <S.ContactHeaderBarWrap>
        <S.ContactHeaderBarInfo>
          {contactHeaderBarMock.info.map((inf) => (
            <S.ContactHeaderBarInfoItem key={inf.key}>
              {inf.icon}
              <Typography variant='caption'>{contactBar.info[`${inf.i18n}`]}</Typography>
            </S.ContactHeaderBarInfoItem>
          ))}
        </S.ContactHeaderBarInfo>
        <S.ContactHeaderBarSocial>
          {contactHeaderBarMock.social.map((social) => (
            <S.ContactHeaderBarSocialItem key={social.key}>{social.icon}</S.ContactHeaderBarSocialItem>
          ))}
        </S.ContactHeaderBarSocial>
      </S.ContactHeaderBarWrap>
    </React.Fragment>
  );
};

export default ContactHeaderBar;
