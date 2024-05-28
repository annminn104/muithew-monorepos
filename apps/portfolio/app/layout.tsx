import Wrapper from '@/components/templates/wrapper';
import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Matthew Portfolio',
  description: 'Matthew Portfolio • Frontend Developer',
  openGraph: {
    title: 'Matthew Portfolio',
    description: 'Matthew Portfolio • Frontend Developer',
    type: 'website',
    images: ['https://raw.githubusercontent.com/annminn104/muithew-monorepos/master/apps/portfolio/public/thumbnail.png']
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
