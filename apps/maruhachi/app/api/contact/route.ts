import envConfig from 'environments';
import { ContactTypeRequest } from 'global';
import nodemailer from 'nodemailer';
import { TemplateUtils } from 'utils';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, phone, email, address, zipCode, message } = await request.json();

    if (!email || !message || !firstName || !lastName || !phone || !email)
      return Response.json({ message: 'Error missing fields send to email' }, { status: 400 });

    const sendMsg: ContactTypeRequest = {
      from: envConfig.email.send,
      to: email,
      subject: 'noreply: [MARUHACHI NOUSAN] - Thanks for contacting us',
      html: TemplateUtils.emailSend({ firstName, lastName, phone, email, address, zipCode, message })
    };

    const receiveMsg: ContactTypeRequest = {
      from: envConfig.email.send,
      to: envConfig.email.receive,
      subject: `noreply: [MARUHACHI NOUSAN] - ${lastName} contact`,
      html: TemplateUtils.emailReceive({ firstName, lastName, phone, email, address, zipCode, message })
    };

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: { user: envConfig.email.send, pass: envConfig.email.password }
    });

    await Promise.all([transporter.sendMail(sendMsg), transporter.sendMail(receiveMsg)]);

    return Response.json({ message: 'Email send successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ message: 'Failed send to email' }, { status: 500 });
  }
}
