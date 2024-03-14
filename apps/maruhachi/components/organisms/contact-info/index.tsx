import React from 'react';

import { SectionContentProps } from '@components/templates/section-contact';
import { contactSectionMock } from '@mocks';

import * as S from './styles';

type ContactInfoProps = {
  i18n: Pick<SectionContentProps, 'info' | 'social'>;
};

const ContactInfo: React.FC<ContactInfoProps> = ({ i18n: { info, social } }) => {
  return (
    <S.ContactInfoWrap>
      <S.ContactInfoList>
        {info.map((inf, index) => (
          <S.ContactInfoItem key={index} href={inf.href} target={inf.isBlank ? '_blank' : '_self'}>
            <S.ContactInfoIcon>{contactSectionMock.info.find((v) => v.key === inf.key).icon}</S.ContactInfoIcon>
            <S.ContactInfoText>{inf.label}</S.ContactInfoText>
          </S.ContactInfoItem>
        ))}
      </S.ContactInfoList>
      <S.ContactInfoSocialList>
        {social.map((soc) => (
          <S.ContactInfoSocialItem key={soc.key} href={soc.href} target={soc.isBlank ? '_blank' : '_self'}>
            {contactSectionMock.social.find((v) => v.key === soc.key).icon}
          </S.ContactInfoSocialItem>
        ))}
      </S.ContactInfoSocialList>
    </S.ContactInfoWrap>
  );
};

export default ContactInfo;
