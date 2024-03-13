import React from 'react';

import { SectionContentProps } from '@components/templates/section-contact';
import * as S from './styles';

type ContactMapProps = {
  i18n: Pick<SectionContentProps, 'map'>;
};

const ContactMap: React.FC<ContactMapProps> = ({
  i18n: {
    map: { iframe }
  }
}) => {
  return (
    <S.ContactMapWrap>
      <iframe src={iframe} width='100%' height='500' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
    </S.ContactMapWrap>
  );
};

export default ContactMap;
