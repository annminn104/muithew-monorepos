import { ContactSchemaType } from 'schemas';

import { footerEmailMock, titleEmailMock } from '@mocks';

export class TemplateUtils {
  static emailReceive = (data: ContactSchemaType) => {
    const { address, firstName, lastName, phone, email, zipCode, message } = data;

    return `<div style="width: 100%; max-width: 500px; border: 12px solid #76453B; padding: 16px">
    ${titleEmailMock}
    <div style="font-size: 24px;">
      <p style="font-weight: 700; text-align: center;">Thông tin khách hàng</p>
      <p>Tên: <span style="font-weight: 600;">${firstName + ' ' + lastName}</span></p>
      <p>SĐT: <span style="font-weight: 600;">${phone}</span></p>
      <p>Email: <span style="font-weight: 600;">${email}</span></p>
      <p>Address: <span style="font-weight: 600;">${address || 'None Address'}</span></p>
      <p>Zip-code: <span style="font-weight: 600;">${zipCode || 'None Zip-Code'}</span></p>
      <p>Message: <span style="font-weight: 600;">${message}</span></p>
    </div>
    ${footerEmailMock}
  </div>`;
  };

  static emailSend = (data: ContactSchemaType) => {
    return `<div style="font-size: 24px;">
      <p>Xin chào <span style="font-weight: 600;">${data.firstName + ' ' + data.lastName}</span> cảm ơn bạn đã tin tưởng vào <span
          style="color: #76453B; font-weight: 600;">Maruhachi Nousan</span></p>
      <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
      <p style="text-align: center; font-weight: 600;">Thanks!</p>
    </div>`;
  };
}
