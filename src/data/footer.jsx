import { FaRegEnvelope } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const footerNavs = [
  {
    label: "About",
    items: [
      {
        href: "javascript:void()",
        name: "About Us",
      },
      {
        href: "javascript:void()",
        name: "Blog",
      },
      {
        href: "javascript:void()",
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
        href: "javascript:void()",
        name: "@IOTBTECH",
        icon: <FaXTwitter />,
      },
      {
        href: "javascript:void()",
        name: "2348123456789",
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

export default footerNavs;
