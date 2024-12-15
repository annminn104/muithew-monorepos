import { z } from 'zod';

export const contactSchema = z.object({
  title: z.string().min(1, { message: '必須' }),
  businessName: z.string(),
  firstName: z.string().min(1, { message: '必須' }),
  lastName: z.string().min(1, { message: '必須' }),
  email: z.string().min(1, { message: '必須' }).email('送信されるメールアドレスが無効です。ご確認お願いいたします。'),
  phone: z.string().min(1, { message: '必須' }),
  fax: z.string(),
  address: z.string().min(1, { message: '必須' }),
  zipCode: z.string().min(1, { message: '必須' }),
  message: z.string().min(1, { message: '必須' })
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
