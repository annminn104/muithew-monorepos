import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  email: z.string().min(1, { message: 'Email is required' }).email('Please specify a valid email'),
  phone: z.string().min(1, { message: 'Phone is required' }),
  address: z.string(),
  zipCode: z.string(),
  message: z.string().min(1, { message: 'Message is required' })
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
