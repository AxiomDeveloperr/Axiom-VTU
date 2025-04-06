import { iotbTech } from "../assets/images";
import ApplicantionForm from "../pages/applicantPage/ApplicationForm";

const ApplicantionFormPage = () => {
    return (
        <div className="bg-gray-50">
            <img src={iotbTech} alt="iotb logo" className="w-64 md:w-96 mx-auto" />
            <ApplicantionForm />
        </div>
    )
}

export default ApplicantionFormPage
