import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
            <div className="max-w-lg mx-auto space-y-3 text-center">
                <div className="pb-6">
                    <img src="public/tektariq_logo.png" width={150} className="mx-auto" />
                </div>
                <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                    Page not found
                </h3>
                <p className="text-gray-600">
                    Sorry, the page you are looking for could not be found or has been removed.
                </p>
                <Link to="/" className="text-tt-primary duration-150 font-medium inline-flex items-center gap-x-1">
                    <IoArrowBackOutline />
                   <span> Go back</span>
                </Link>
            </div>
        </div>
    </main>
  )
}

export default NotFound