import envConfig from 'environments';
import { ContactTypeRequest } from 'global';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const {
      email: { address, password }
    } = envConfig;

    const { from, subject, html } = await request.json();

    if (!from || !subject || !html) return Response.json({ message: 'Error missing fields send to email' }, { status: 400 });

    const sendMsg: ContactTypeRequest = { from: from, to: address, subject: subject, html: `${html}` };

    const transporter = nodemailer.createTransport({ service: 'Gmail', port: 465, secure: true, auth: { user: address, pass: password } });

    await transporter.sendMail(sendMsg);

    return Response.json({ message: 'Email send successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ message: 'Failed send to email' }, { status: 500 });
  }
}
