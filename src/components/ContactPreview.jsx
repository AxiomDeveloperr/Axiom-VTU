import { Link } from 'react-router-dom'
import { VscArrowRight } from "react-icons/vsc";


const ContactPreview = () => {

    return (
        <div className="flex flex-col gap-6 bg-white lg:p-24 p-2">

            <h1 className="text-3xl font-bold">Contact Us</h1>

            <div className="flex flex-col m-2 justify-center items-center gap-4">

            <p className=" text-gray-600">We're always here to help! Whether you have questions, feedback, or need assistance with any of our services, our customer care team is ready to respond quickly and professionally.</p>
            <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-row lg:gap-2">
            <h2 className="text-lg primary-text font-bold">Talk to Our Customer Care Team</h2>
            <Link to="/contactpage">
             <VscArrowRight className="flex primary-text mt-2"/>
            </Link>

            </div>
            <p className="text-gray-600"> Have a complaint or an inquiry? We're just a message away. Our support team is friendly, responsive, and dedicated to making sure your experience with us is smooth and stress-free.</p>
            </div>
            </div>
        </div>
    )
};


export default ContactPreview;