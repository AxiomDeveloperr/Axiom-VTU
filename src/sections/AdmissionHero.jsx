import Admission from "../components/Admission"
import { admissionImage } from "../assets/images";

const AdmissionHero = () => {
  return (
    <div className="bg-tt-grey bg-opacity-10 lg:items-center">
        <div className=" ">
        <Admission title="Upgrade your tech skill and knowledge with our online courses here at IOTB TECH FELLOWSHIP"
      desc="Unlock your potentials with our 6 months intensive training program. Learn from the best tutors that will take you through everything you need to know about your course."
      img={admissionImage}
      />
        </div>
    </div>
  )
}

export default AdmissionHero