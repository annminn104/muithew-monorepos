import {
  LetterOpenedIcon,
  PhoneCallingRoundedIcon,
  PointOnMapIcon,
  SocialFacebookBgIcon,
  SocialInstagramBgIcon,
  SocialMessengerBgIcon,
  SocialWhatsAppBgIcon
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
    { key: 'instagram', icon: <SocialInstagramBgIcon /> },
    { key: 'whatsApp', icon: <SocialWhatsAppBgIcon /> }
  ]
};

export const contactFormMocks: Array<ITextField<ContactSchemaType>> = [
  {
    col: { xs: 6 },
    textField: { name: 'firstName', id: 'firstName', autoComplete: 'first-name', label: 'First Name', required: true }
  },
  {
    col: { xs: 6 },
    textField: { name: 'lastName', id: 'lastName', autoComplete: 'last-name', label: 'Last Name', required: true }
  },
  {
    col: { xs: 6 },
    textField: { name: 'phone', id: 'phone', autoComplete: 'phone', label: 'Phone', required: true }
  },
  {
    col: { xs: 6 },
    textField: { name: 'email', id: 'email', autoComplete: 'email', label: 'Email', required: true }
  },
  {
    col: { xs: 10 },
    textField: { name: 'address', id: 'address', autoComplete: 'address', label: 'Address', required: false }
  },
  {
    col: { xs: 2 },
    textField: { name: 'zipCode', id: 'zipCode', autoComplete: 'zipCode', label: 'Zip-code', required: false }
  },
  {
    col: { xs: 12 },
    textField: { name: 'message', id: 'message', autoComplete: 'message', label: 'Message', required: true, rows: 7, multiline: true }
  }
];
