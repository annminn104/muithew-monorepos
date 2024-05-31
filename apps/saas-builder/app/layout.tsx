import '@uploadthing/react/styles.css';

import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muithew SaaS Builder',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <RootProvider>
          <main>{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
