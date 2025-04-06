import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Copyright from "../components/Copyright";
import TheLogo from "../components/Logo";

const Footer = () => {
  const footerNavs = [
    {
      label: "About",
      items: [
        {
          href: "/about",
          name: "About Us",
        },
        {
          href: "/blogs",
          name: "Blog",
        },
        {
          href: "/about",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },

    {
      label: "Follow Us",
      items: [
        {
          href: "javascript:void()",
          name: "@IOTBTECH",
          icon: <LuFacebook />,
        },
        {
          href: "javascript:void()",
          name: "@IOTBTECH",
          icon: <FaInstagram />,
        },
        {
          href: "tel:+2347065829170",
          name: "+2347065829170",
          icon: <FaPhoneAlt />,
        },
        {
          href: "javascript:void()",
          name: "+2349034425688 / +2347065829170",
          icon: <FaWhatsapp />,
        },
        {
          href: "mailto:iotbtech@yahoo.com",
          name: "iotbtech@yahoo.com",
          icon: <FaRegEnvelope />,
        },
      ],
    },
  ];

  return (
    <div>
      <footer className=" bg-tt-grey bg-opacity-10 text-tt-black text-opacity-80 px-4 py-8 md:px-16">
        <div className="mx-auto flex flex-col mt-10 space-y-6 justify-between items-start lg:flex-row md:space-y-0 md:mt-0">
          <div className="max-w-xs">
            <TheLogo />
            <p className="leading-relaxed mt-2 text-[15px]">
              We&apos;re IOTB TECH, a fast-rising tech academy, on a mission to
              librate lives.
            </p>
          </div>

          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-tt-black font-medium">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={el.name + idx}>
                  <NavLink
                    to={el.href}
                    className="hover:underline hover:text-tt-primary"
                  >
                    {el.icon ? (
                      <span className="flex items-center gap-1">
                        <span className="text-tt-primary"> {el.icon}</span>
                        <span>{el.name}</span>
                      </span>
                    ) : (
                      <span>{el.name}</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}

          <div>
            <h4 className="font-medium">Get in touch with US </h4>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2">Stay up to date</label>
              <div className="max-w-sm flex items-center border rounded-md p-1 bg-tt-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none"
                />
                <button className="p-2.5 rounded-md text-tt-primary hover:shadow-md sm:px-5">
                  <GrSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <Copyright />
    </div>
  );
};

export default Footer;
