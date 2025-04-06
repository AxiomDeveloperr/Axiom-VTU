import axios from 'axios';
import { FaTimes, FaUserAlt } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ApplicantDetailsModal = ({ applicant, onClose }) => {
  const onScheduleInterview = async (applicant) => {
    const interviewDetails = {
      subject: 'Interview Invitation',
      body: `Dear ${applicant.firstName}, \n\n
                You have been shortlisted for an interview. Here are the details:\n\n
                Date: [Insert Date] \n Time: [Insert Time]\nLocation/Meeting Link: [Insert Location or Link]\n\n
                Please confirm your availability.\n\nBest Regards,\n[Your Organization Name]`,
      recipient: applicant.email,
    };

    try {
      await axios.post('api/end-point', interviewDetails);
      alert('Interview email has been sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send interview email.');
    }
  };

  const onReject = async (applicant) => {
    const rejectionDetails = {
      subject: 'Application Status Update',
      body: `Dear ${applicant.firstName},\n\n
                We appreciate your interest in [Your Organization Name]. 
                After careful review, we regret to inform you that we will not be moving forward with your 
                application.\n\nThank you for your time and effort. We wish you all the best in your future 
                endeavors.\n\nBest Regards,\n[Your Organization Name]`,
      recipient: applicant.email,
    };
    try {
      await axios.post('/api/send-email', rejectionDetails);
      alert('Rejection email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send rejection email.');
    }
  };

  const onAdmit = async (applicant) => {
    const admissionDetails = {
      subject: "Congratulations! You've Been Admitted",
      body: `Dear ${applicant.firstName},\n\n
                Congratulations! We are pleased to inform you that you have been admitted to 
                [Your Organization Name].\n\nFurther details regarding your next steps will be shared 
                with you shortly.\n\nWe look forward to having you onboard!\n\n
                Best Regards,\n[Your Organization Name]`,
      recipient: applicant.email,
    };

    try {
      await axios.post('/api/send-email', admissionDetails);
      alert('Admission email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send admission email.');
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
          <div className="flex items-center space-x-4">
            <div>
              {applicant.profileImage ? (
                <img
                  src={applicant.profileImage}
                  alt="Applicant Profile"
                  className="w-20 h-20 object-cover rounded-full border"
                />
              ) : (
                <div className="p-3 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaUserAlt size={32} />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-20">
              <h2 className="text-2xl font-bold">{applicant.fullName}</h2>
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-tt-primary ">{applicant.testScore}</h2>
                {/* <p className="font-bold text-sm">Text Score</p> */}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 mt-3">
            <button
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:bg-blue-500 hover:scale-105"
              onClick={() => onScheduleInterview(applicant)}
            >
              Schedule Interview
            </button>
            <button
              className="px-5 py-2 bg-red-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:bg-red-500 hover:scale-105"
              onClick={() => onReject(applicant)}
            >
              Reject
            </button>
            <button
              className="px-5 py-2 bg-green-600 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:bg-green-500 hover:scale-105"
              onClick={() => onAdmit(applicant)}
            >
              Admit
            </button>
          </div>

          <div className="mt-4 text-gray-700">
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Email: </strong>
              <p>{applicant.email}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Phone Number: </strong>
              <p>{applicant.phoneNumber}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Alternate Phone Number: </strong>
              <p>{applicant.alternatePhone}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Age Range: </strong>
              <p>{applicant.ageRange}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Religion: </strong>
              <p>{applicant.religion}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Geopolitical Zone: </strong>
              <p>{applicant.geopoliticalZone}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Education Qualification: </strong>
              <p>{applicant.educationQualification}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Desired Stack: </strong>
              <p>{applicant.Course.name}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Tech Skills: </strong>
              <p>{applicant.hasTechSkills === 'Yes' ? applicant.techSkills : 'None'}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Laptop Access: </strong>
              <p>{applicant.haveLaptop === true ? applicant.pcSpecification : 'No'}</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Electricity Hours: </strong>
              <p>{applicant.electricityAccess}/10</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Internet Access (1-10): </strong>
              <p>{applicant.internetAccess}/10</p>
            </div>
            <div className="flex items-center space-x-4 text-tt-black text-lg">
              <strong>Dedicated Hours: </strong>
              <p>{applicant.learningHours}/week</p>
            </div>
            <div className="text-tt-black text-lg">
              <strong>Why Choose This Track: </strong>
              <p>{applicant.reasonsForLearning}</p>
            </div>
            <div className="text-tt-black text-lg">
              <strong>Why Pick You: </strong>
              <p>{applicant.admissionReason}</p>
            </div>
          </div>

          <button
            className="absolute top-4 right-4 p-1 rounded-md font-bold bg-gray-500 text-tt-white transform transition-all duration-300 hover:bg-red-500 hover:scale-105"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetailsModal;
