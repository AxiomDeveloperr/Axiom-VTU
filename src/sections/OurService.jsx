import { BsChatLeft } from 'react-icons/bs';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const OurService = () => {
  return (
    <div className="px-4 md:px-8 mb-8">
      <div className="mx-auto flex-col items-center justify-center text-left lg:text-center space-y-6">
        <h2 className="text-tt-primary text-xl md:text-2xl lg:text-3xl font-bold">Our Services</h2>
        <h1 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8">Services we Offer</h1>
        <p className="text-tt-grey text-lg lg:text-md text-justify">
          With our awesome team we offers a variety of services from UI/UX design to cloud solutions
          architecture. we offer holistic trainings that helps you achieve your goals of skills
          development and professional breakthrough.
        </p>
        <div className="flex flex-col lg:flex-row mx-auto justify-center lg:justify-center gap-5 -z-50">
          <Link to="/contact">
            <Button text="Lets Talk" type="solid" icon={<BsChatLeft />} />
          </Link>
          <Link to="/portfolio">
            <Button text="Check our Services" type="outline" icon={<MdOutlineNavigateNext />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurService;
