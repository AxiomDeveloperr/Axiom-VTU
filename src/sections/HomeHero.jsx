import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";
import {
  cloudIcon,
  colorPalette,
  hexagon,
  titik,
  uiUx,
  vector,
  webIcon,
} from "../assets/icons";
import { heroImage } from "../assets/images";
import Button from "../components/Button";
import GreetingsComponent from "../components/GreetingsComponent";
import FloatingBox from "../components/HomeFloatingSkills";
import ImagesComponent from "../components/ImageContainer";
import IOTBBadge from "../components/IOTBBadge";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 mx-auto lg:mt-5 mt-14 ">
      <div className="lg:w-1/2 text-center lg:text-left relative">
        <div className="justify-center items-stretch">
          <img
            src={vector}
            alt="vector arrow"
            className="hidden lg:block -left-24 text-center h-full absolute"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-left mb-2 text-tt-primary -mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <GreetingsComponent />
          </h2>
          <h1 className="text-tt-black text-left text-4xl md:text-5xl font-extrabold mb-8">
            On a mission to liberate lives <IOTBBadge />
          </h1>
          <p className="text-xl text-tt-grey mb-6 text-left">
            Empowering Nigerian youths with in-demand tech skills, the IOTB TECH
            Fellowship is a 6-month program offering training in selected tech
            fields, fostering career growth and development.
          </p>
          <div className="flex flex-col lg:flex-row mx-auto justify-center lg:justify-start mt-9 mb-8 gap-5 -z-50">
            <Link
              to="/fellows/registration"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button
                text="Enrol Today"
                type="solid"
                icon={<MdOutlineNavigateNext />}
              />
            </Link>
            <Link
              to="/services"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <Button text="Check our Services" type="outline" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2 flex justify-center z-10">
        {/* <div className="absolute hidden lg:block -top-6 left-[100px] w-[310px] h-[305px] bg-tt-primary rounded-hexagon -z-10"></div> */}
        <img
          src={hexagon}
          alt="hexagon background"
          className="absolute hidden lg:block -top-6 w-[310px] -z-10"
        />
        <img
          src={titik}
          alt="pattern circles background"
          className="absolute hidden lg:block top-14 left-[200px] w-[300px] h-[350px] -z-20"
        />
        <ImagesComponent
          src={heroImage}
          alt="hero image"
          className="hidden lg:block h-[350px]"
        />
        <div className="hidden lg:block">
          <FloatingBox
            icon={uiUx}
            text="Technology"
            position="top-16 left-20"
          />
          <FloatingBox
            icon={cloudIcon}
            text="Faith"
            position="top-32 right-24"
          />
          <FloatingBox
            icon={webIcon}
            text="Entreprenuership"
            position="top-56 left-20"
          />
          <FloatingBox
            icon={colorPalette}
            text="Empowerment"
            position="top-72 right-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
