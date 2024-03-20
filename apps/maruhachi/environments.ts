import { z } from 'zod';

const configSchema = z.object({
  email: z.object({
    send: z.string(),
    receive: z.string(),
    password: z.string()
  })
});

const configEnv = configSchema.safeParse({
  email: {
    send: process.env.NEXT_PUBLIC_GMAIL_EMAIL_SEND,
    receive: process.env.NEXT_PUBLIC_GMAIL_EMAIL_RECEIVE,
    password: process.env.NEXT_PUBLIC_GMAIL_EMAIL_PASSWORD
  }
});

if (!configEnv.success) {
  console.error(configEnv);
  throw new Error('ENV Not Found!');
}

const envConfig = configEnv.data;
export default envConfig;
