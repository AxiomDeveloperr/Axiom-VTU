import OurService from '../sections/OurService';
import OurProcess from '../sections/OurProcess';
import ServicesList from '../sections/ServicesList.jsx';
import Testimonials from '../sections/Testimonials';

const Services = () => {
  return (
    <div className="space-y-24 md:px-16">
      <OurService />
      <OurProcess />
      <ServicesList />
      <Testimonials />
    </div>
  );
};

export default Services;
