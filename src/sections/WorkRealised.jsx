import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import WorkImages from "../components/WorkImages";
import workImages from "../data/workImages";

const WorkRealised = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-tt-primary mb-3 text-xl md:text-2xl lg:text-3xl font-bold">
        The work we realised
      </h2>
      <h3 className="text-tt-black text-3xl font-bold mb-8 max-w-2xl">
        The work we did that made our Client happy and satisfied
      </h3>

      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        {workImages.map((image) => (
          <a href={image.href} key={image.imgText}>
            <WorkImages
              key={image.imgText}
              imgSrc={image.imgSrc}
              imgTitle={image.imgTitle}
              imgText={image.imgText}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12 mb-10">
        <Link
          to="/portfolio"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Button
            type="outline"
            text="Explore More Projects"
            icon={<MdOutlineNavigateNext />}
          />
        </Link>
      </div>
    </div>
  );
};

export default WorkRealised;
