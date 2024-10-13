import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Maruhachi Nousan',
    template: '%s - Maruhachi Nousan'
  },
  description: 'Maruhachi Nousan',
  twitter: {
    card: 'summary_large_image'
  },
  keywords: ['eggs', 'chicken']
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <>{children}</>;
}
