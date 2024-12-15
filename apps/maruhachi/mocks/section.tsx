import {
  LetterOpenedIcon,
  PhoneCallingRoundedIcon,
  PointOnMapIcon,
  SocialFacebookBgIcon,
  SocialInstagramBgIcon,
  SocialMessengerBgIcon
} from '@styles/ui-mui/icons';
import { ITextField } from 'global';
import { ContactSchemaType } from 'schemas';

export const serviceSectionMock = {
  height: 700,
  divider: 40
};

export const contactSectionMock = {
  info: [
    { key: 'mail', icon: <LetterOpenedIcon /> },
    { key: 'phone', icon: <PhoneCallingRoundedIcon /> },
    { key: 'address', icon: <PointOnMapIcon /> }
  ],
  social: [
    { key: 'facebook', icon: <SocialFacebookBgIcon /> },
    { key: 'messenger', icon: <SocialMessengerBgIcon /> },
    { key: 'instagram', icon: <SocialInstagramBgIcon /> }
  ]
};

export const contactFormMocks: Array<ITextField<ContactSchemaType>> = [
  {
    col: { xs: 12, md: 12 },
    textField: { name: 'businessName', id: 'businessName', autoComplete: 'business-name', label: '会社名・組織名', required: false }
  },
  {
    col: { xs: 12, md: 6 },
    textField: { name: 'firstName', id: 'firstName', autoComplete: 'first-name', label: '姓', required: true }
  },
  {
    col: { xs: 12, md: 6 },
    textField: { name: 'lastName', id: 'lastName', autoComplete: 'last-name', label: '名前', required: true }
  },
  {
    col: { xs: 12, md: 6 },
    textField: { name: 'phone', id: 'phone', autoComplete: 'phone', label: '電話番号', required: true }
  },
  {
    col: { xs: 12, md: 6 },
    textField: { name: 'fax', id: 'fax', autoComplete: 'fax', label: 'FAX番号', required: false }
  },
  {
    col: { xs: 12, md: 12 },
    textField: { name: 'email', id: 'email', autoComplete: 'email', label: 'メール', required: true }
  },
  {
    col: { xs: 12, md: 10 },
    textField: { name: 'address', id: 'address', autoComplete: 'address', label: 'ご住所', required: true }
  },
  {
    col: { xs: 12, md: 2 },
    textField: { name: 'zipCode', id: 'zipCode', autoComplete: 'zipCode', label: '郵便番号', required: true }
  },
  {
    col: { xs: 12, md: 12 },
    textField: {
      name: 'message',
      id: 'message',
      autoComplete: 'message',
      label: 'お問い合わせ内容について',
      required: true,
      rows: 7,
      multiline: true
    }
  }
];
