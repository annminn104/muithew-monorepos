import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maruhachinousan',
  description: 'Maruhachinousan'
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
