import Button from "../components/Button";
import { CiChat1 } from "react-icons/ci";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto flex-col items-center justify-center text-left lg:text-center space-y-6">
        <h3 className="text-tt-primary mb-0 lg:mb-3 text-xl md:text-2xl lg:text-3xl font-bold">
          About Us
        </h3>
        <h2 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8">
          What we do is what makes us who we are. 
        </h2>
        <p className="text-tt-grey text-base lg:text-md text-justify">
        The IOTB TECH Fellowship is a yearly program designed to train beginners in selected tech fields 
        over a six-month period. As an initiative of the International Organization of Tijaniyyah Brotherhood 
        (IOTB)—the largest alumni body of the TIMSAN organization—our mission is to empower Nigerian youths, 
        regardless of backgrounds or affiliations, with in-demand tech skills, helping them build defined career 
        paths in the tech ecosystem.  
        <br />
        We currently train fellows in graphic design, product design, full-stack web development, and cloud 
        engineering. The program blends instructor-led sessions, hands-on practical learning, and impactful 
        project work. To ensure holistic development, we also host a webinar series focusing on soft skills 
        and expert insights tailored to each learning track. These initiatives collectively prepare our fellows 
        for seamless integration into their respective career paths as skilled and confident professionals.

        </p>
        <div className="flex mx-auto justify-center gap-4 flex-col lg:flex-row">
          <Link
            to="/login"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Button text="Let’s Talk" type="solid" icon={<CiChat1 />} />
          </Link>
          <Link
            to="/services"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Button
              text="Check our Services"
              type="outline"
              icon={<RiArrowRightLine />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
