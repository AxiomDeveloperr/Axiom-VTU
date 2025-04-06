import CompaniesLogoGrid from '../components/CompaniesLogoGrid';
import Teams from '../components/Teams';
import HomeHero from '../sections/HomeHero';
import ServicesOffer from '../sections/HomeServicesOffer';
import Testimonials from '../sections/Testimonials';
import WorkRealised from '../sections/WorkRealised';

const Home = () => {
  return (
    <div className="md:px-16">
      <HomeHero />
      <CompaniesLogoGrid />
      <ServicesOffer />
      <Teams />
      <WorkRealised />
      <Testimonials />
    </div>
  );
};

export default Home;
