import airtel from "../assets/images/airtel.jpg"
import mtn from "../assets/images/mtn.png"
import glo from "../assets/images/glo.jpg"
import mobile from "../assets/images/mobile.jpg"
import choice from "../assets/images/choice.jpg"
import jamb from "../assets/images/jamb.jpg"


const AboutUs = ({title, desc, img}) => {

    return (
        <div className="bg-white flex flex-col lg:gap-24 gap-6">
     
      <div className="flex flex-col gap-6 items-center justify-center pt-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className=" flex text-gray-600 lg:px-12 px-4 gap-2">{desc}</p>
      </div>
      
      <div className="flex tertiary-color lg:flex-row flex-col gap-6  p-10 justify-center items-center">
        <img src={mtn} alt="image" className="flex rounded w-24 h-16"/>
        <img src={glo} alt="" className="flex rounded w-24 h-16"/>
         <img src={choice} alt="" className="flex rounded w-24 h-16"/>
         <img src={airtel} alt="" className="flex rounded w-24 h-16"/>
          <img src={mobile} alt="" className="flex rounded w-48 h-18"/>
           <img src={jamb} alt="" className="flex rounded w-48 h-18"/>
      </div>
      

    </div>
    )
};


export default AboutUs;