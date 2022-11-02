import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HomeBrackets } from '../../components/HomeBrackets';
import { HomeMainSection } from '../../components/HomeMainSection';

export const HomePage = () => {
  return (
    <div className='bg-gray-300'>
      <Header />
      <HomeMainSection/>
      <HomeBrackets />
      <Footer />
    </div>
  );
};
