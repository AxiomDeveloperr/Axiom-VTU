// import Button from '../components/Button';
// import { MdOutlineNavigateNext } from 'react-icons/md';

import Alert from "../components/Alert";
import Faq from "../components/Faq";
import PrivacyPolicy from "./policy/PrivacyPolicy";
import TermsAndConditions from "./policy/TermsCondition";


const ComponentTest = () => {
  return (
    <div>

      <div>
        <div className="">
         <PrivacyPolicy />
          {/* <Alert /> */}
          {/* <Button type="outline" text="Learn More" icon={<MdOutlineNavigateNext />} />
          <Button type="solid" text="Learn More" icon={<MdOutlineNavigateNext />} /> */}
        </div>
      </div>
    </div>
  );
};

export default ComponentTest;
