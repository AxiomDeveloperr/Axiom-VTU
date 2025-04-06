import { MdOutlineNavigateNext } from "react-icons/md";
import line from "../assets/images/line.svg";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import CustomTextArea from "../components/CustomTextArea";
import Faq from "../components/Faq";
import ServicesList from "../sections/ServicesList.jsx";
import Testimonials from "../sections/Testimonials";

function Contact() {
  return (
    <div>
      <div className="mx-auto leading-snug max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
        <img
          src={line}
          alt="line"
          className="absolute w-full -left-10 -right-10 -z-10 hidden md:block"
        />
        <div className="max-w-lg mx-auto mb-10 space-y-5 relative z-10">
          <div>
            <p className="lg:text-center md: text-left font-bold text-tt-primary text-[22px]">
              Let&apos;s have a chat
            </p>
            <h1 className="lg:text-center md: text-left font-bold text-tt-black text-[30px]">
              An expert at your services
            </h1>
          </div>

          <form action="" className="space-y-4">
            <CustomInput
              type="text"
              placeholder="Adekunle Ciroma Chukwuma"
              label="Full Name"
              name="full-name"
            />
            <CustomInput
              type="email"
              placeholder="shehu-shagari@yahoo.com"
              label="Email"
              name="email"
            />
            <CustomInput
              type="number"
              placeholder="2348100000009"
              label="Phone"
              name="phone"
            />

            <CustomTextArea
              name="message"
              placeholder="Type in your message"
              label="Message"
            />

            <div className="flex justify-center items-center">
              <Button text="Send a message" icon={<MdOutlineNavigateNext />} />
            </div>
          </form>
        </div>
      </div>
      <Faq />
      <ServicesList />
      <Testimonials />
    </div>
  );
}

export default Contact;
