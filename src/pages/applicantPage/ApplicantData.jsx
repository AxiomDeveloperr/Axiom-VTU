import { useState } from 'react';
import ApplicationForm from './ApplicationForm';
import ApplicantsTable from './ApplicantsTable';

const ApplicantData = () => {
  const [applicants, setApplicants] = useState([]);

  const addApplicant = (applicant) => {
    setApplicants([...applicants, applicant]);
  };

  const deleteApplicant = (index) => {
    const updatedApplicants = applicants.filter((_, i) => i !== index);
    setApplicants(updatedApplicants);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="space-y-6">
        <ApplicationForm addApplicant={addApplicant} />
        <ApplicantsTable applicants={applicants} deleteApplicant={deleteApplicant} />
      </div>
    </div>
  );
};

export default ApplicantData;
