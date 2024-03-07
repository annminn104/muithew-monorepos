import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages = (await (locale === 'en' ? import('./messages/en.json') : import(`./messages/${locale}.json`))).default;

  return {
    messages: messages
  };
});
