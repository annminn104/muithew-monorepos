import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import RootProvider from './provider';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maruhachinousan',
  description: 'Maruhachinousan'
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <RootProvider>{children}</RootProvider>;
}
