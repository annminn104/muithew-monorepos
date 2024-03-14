import { z } from 'zod';

const configSchema = z.object({
  email: z.object({
    address: z.string(),
    password: z.string()
  })
});

const configEnv = configSchema.safeParse({
  email: {
    address: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
    password: process.env.NEXT_PUBLIC_GMAIL_EMAIL_PASSWORD
  }
});

if (!configEnv.success) {
  console.error(configEnv);
  throw new Error('ENV Not Found!');
}

const envConfig = configEnv.data;
export default envConfig;
