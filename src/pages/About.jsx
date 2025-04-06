import AboutUs from "../sections/AboutUs";
import AboutUsTeamSection from "../sections/AboutUsTeamSection.jsx";
import ServicesList from "../sections/ServicesList.jsx";
import Testimonials from "../sections/Testimonials";

const About = () => {
  return (
    <div>
      <AboutUs />
      <ServicesList />
      <AboutUsTeamSection />
      <Testimonials />
    </div>
  );
};

export default About;
