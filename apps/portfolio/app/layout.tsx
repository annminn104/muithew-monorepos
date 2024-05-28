import Wrapper from '@/components/templates/wrapper';
import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matthew Portfolio',
  description: 'Matthew Portfolio • Frontend Developer',
  openGraph: {
    images: ['./thumbnail.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className='noScroll'>
        <RootProvider>
          <Wrapper>{children}</Wrapper>
        </RootProvider>
      </body>
    </html>
  );
}
