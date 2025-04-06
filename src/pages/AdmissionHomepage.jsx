import React from "react"
import AdmissionHero from "../sections/AdmissionHero"
import Timelines from "../sections/Timelines"
import Program from "../sections/Program"
import Testimonials from "../sections/Testimonials"


const AdmissionHomepage = () => {
  return (
    <div>
       <AdmissionHero />
       <Timelines />
       <Program />
       <Testimonials />
    </div>
  )
}

export default AdmissionHomepage