import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Muithew Landing',
  description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
