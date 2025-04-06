import ProjectPortfolioCard from "../components/ProjectPortfolioCard"
import ProjectPortfolioHero from "../components/ProjectPortfolioHero"
import ProjectStats from "../sections/ProjectStats"
import Testimonials from "../sections/Testimonials"

const Portfolio = () => {
  return (
    <div>
      <ProjectPortfolioHero />
      <ProjectStats />
      <ProjectPortfolioCard />
      <Testimonials />
    </div>
  )
}

export default Portfolio