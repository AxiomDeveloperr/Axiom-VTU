import { aedc, airtel, dstv, education, eedc, ekdc, empty, glo, gotv, jamb, mobile, mtn, showmax, startimes, utility, waec } from "../assets/images";

const services = [
  {
    title: "Buy Airtime & Data",
    description:
      "Our app lets you buy airtime and data swiftly, so you’re always in touch with what matters most.",
    logos: [airtel, mtn, glo, mobile],
  },
  {
    title: "Cable TV",
    description:
      "Explore a world of content with our cable TV service. From the latest shows we bring it all to your screen.",
    logos: [dstv, gotv, startimes, showmax],
  },
  {
    title: "Result Token",
    description:
      "Get instant access to your results with our result checker token. No more waiting, no more delays.",
    logos: [waec, education, jamb, empty],
  },
  {
    title: "Utility Bills",
    description:
      "Pay your electricity, water, gas, and other utility bills seamlessly with just a few taps. Never miss a due date again!",
    logos: [utility, aedc, eedc, ekdc],
  },
];

export default services;
