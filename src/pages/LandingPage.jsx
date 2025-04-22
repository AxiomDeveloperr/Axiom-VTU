import FeatureService from "../sections/FeatureService"
import HomeHero from "../sections/HomeHero"
import OtherServices from "../sections/OtherServices"
import OurService from "../sections/OurService"
import WalletFundingComponent from "../sections/WalletFundingComponent"
import WhyChooseUs from "../sections/WhyChooseUs"

const LandingPage = () => {
  return (
    <div>
      <HomeHero />
      <WhyChooseUs />
      <OurService />
      <FeatureService />
      <OtherServices />
      <WalletFundingComponent />
    </div>
  )
}

export default LandingPage
