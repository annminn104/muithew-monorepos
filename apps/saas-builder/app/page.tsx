import { layoutMocks } from '@/common/mocks/layout';
import Logo from '@/components/atoms/logo';
import Navigation from '@/components/molecules/navigation';

function Home() {
  return (
    <section>
      <Logo />
      <Navigation list={layoutMocks.navigation} />
    </section>
  );
}

export default Home;
