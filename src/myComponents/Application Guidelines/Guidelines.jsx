import Logo from '../VerifiedEmail/iotbtech.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCohortById, fetchCohorts } from '../../redux/features/admin/cohortSlice';
// import Loader from '../../components/Loader'; // Assuming you have a loading spinner component

const Guidelines = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  // Select the cohorts state from the Redux store
  const { cohorts } = useSelector((state) => state.cohorts);

  useEffect(() => {
    // Fetch cohorts when the component mounts
    dispatch(fetchCohorts());
  }, [dispatch]);

  useEffect(() => {
    // Fetch detailed information about a specific cohort once cohorts are loaded
    if (cohorts.length > 0) {
      const cohortId = cohorts[0].id; // Assuming you want to fetch the first cohort
      dispatch(fetchCohortById(cohortId));
    }
  }, [cohorts, dispatch]);

  // Handle loading state
  // if (status === 'loading') {
  //   return <Loader />;
  // }

  // Handle error state
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <section className="font-montserrat bg-gray-100 py-10 px-6 md:px-16 text-gray-800">
      {/* Logo */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
          aria-label="Go to homepage"
        >
          <img src={Logo} alt="IOTB Tech Logo" className="w-48 md:w-56 h-auto" />
        </button>
      </div>

      {/* Heading & Introduction */}
      <div className="text-center mt-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          IOTB TECH APPLICATION GUIDELINE FOR 2025 ADMISSION
        </h2>
        <p className="text-lg mt-2">
          Please read this guideline before filling up your online application form on the website.
        </p>
      </div>

      {/* Fellowship Overview */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-blue-700">About the IOTB TECH Fellowship</h2>
        <p className="mt-2 leading-relaxed">
          The IOTB TECH Fellowship enhances skill development and community engagement by providing
          a collaborative learning setting where participants progress through a structured learning
          program. Through immersive learning and practical experience, the 2025 fellowship year,
          which happens to be the fourth cohort, seeks to provide participants with fundamental and
          advanced technical knowledge in their chosen learning track. Participants can choose from
          one of <b>Cloud Engineering,</b> <b>Data Analytics,</b> <b>Web Development,</b>{' '}
          <b>Graphic Design,</b> <b>Product Design</b> and <b>Motion Design</b>, while fostering a
          collaborative learning environment.
        </p>
      </div>

      {/* Application Process */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-700">Application Processes</h2>
        <p className="mt-2">The application spans through these four processes:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Application stage</li>
          <li>Preliminary study and assessment</li>
          <li>Final interview stage</li>
          <li>Admission & Onboarding</li>
        </ol>
      </div>

      {/* Eligibility Criteria */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-700">Eligibility Criteria</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Applicant can be a student, secondary school leavers, undergraduate or post graduate
            student. Self-employed or working class who either seek to enhance their skills or
            transition into tech is welcome.
          </li>
          <li>
            Applicants must be a Muslim. While both gender is welcome to apply, we strongly
            encourage females and applicants from the Northern part of the country to apply.
          </li>
          <li>
            Applicant must have access to a well functioning PC, a stable source of electricity and
            reliable internet connection. Kidly note that while training cost is free, IOTB TECH
            will not be responsible for making provisions for data & other consumables costs for
            fellows.
          </li>
          <li>
            Applicants must show a strong will to learn and participate optimally in all IOTB TECH
            activities as they are designed to enhance the fellows’ success in their chosen career
            path.
          </li>
        </ul>
      </div>

      {/* Important Information */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-700">Important Information</h2>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Qualified applicants from the application stage will receive study materials in
            preparation for the preliminary assessment. Applicants are expected to learn using the
            study materials as they will be tested based on what was learnt from the study
            materials.
          </li>
          <li>
            For candidates to proceed to the next stage which is interview, he or she must have a
            minimum score of 60% from the preliminary assessment.
          </li>
          <li>
            For everyone who scored 60% and above from the preliminary assessment, a schedule for
            the final stage in the application process (interview session) will be sent via mails.
            Candidates are strongly advised to provide functional email address and also check their
            mails for updates from the admission team.
          </li>
          <li>
            Kindly note that if you don&apos;t receive a mail after the preliminary assessment, this
            automatically implies that you didn&apos;t meet the minimum requirements to be a part of
            the IOTB TECH Fellowship.
          </li>
          <li>
            Kindly take note of these important dates and only reach out to the admission team via
            mail at{' '}
            <a href="mailto:iotbtechprenuer@gmail.com" className="text-blue-600 mt-2 underline">
              iotbtechprenuer@gmail.com
            </a>{' '}
            five working days of no response after your interview session.
          </li>
          <li>
            To avoid disqualification, avoid submitting more than one application. Instead, wait for
            the admission team to respond as scheduled or you reach out in case of further enquiries
            via email messaging at{' '}
            <a href="mailto:iotbtechprenuer@gmail.com" className="text-blue-600 mt-2 underline">
              iotbtechprenuer@gmail.com
            </a>{' '}
            or via whatsapp on 09034425688 or 08065556791.
          </li>
          <li>
            Just as you are excited to join the 2025 IOTB TECH Fellowship, we are more than glad to
            have you with us. We look forward to setting you apart in your career path, fill you
            with immense values needed to land your dream job and finally,
          </li>
          <li>We wish you the very best in your application.</li>
        </ul>
      </div>

      {/* Important Dates */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-700">Important Dates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
          <p>
            <span className="font-semibold">Application Opens: 10th February, 2025</span>
          </p>
          <p>
            <span className="font-semibold">Application Closes: 23rd February, 2025</span>
          </p>
          <p>
            <span className="font-semibold">Preliminary Study Starts: 24th February, 2025</span>
          </p>
          <p>
            <span className="font-semibold">Preliminary Study Ends: 9th March, 2025</span>
          </p>
          <p>
            <span className="font-semibold">Preliminary Assessment Date: 11th March 2025</span>
          </p>
          <p>
            <span className="font-semibold">Interview Starts: 15th March 2025</span>
          </p>
          <p>
            <span className="font-semibold">Interview Ends:23rd March 2025</span>
          </p>
          <p>
            <span className="font-semibold">Onboarding: To be announced</span>
          </p>
          <p>
            <span className="font-semibold">Training Starts: To be announced.</span>
          </p>
        </div>
      </div>

      {/* Checkbox and Proceed Button */}
      <div className="mt-24">
        <form>
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-600"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              aria-label="I have read and understood the guidelines"
            />
            <span>I have read and understood the guidelines.</span>
          </label>
        </form>

        <div className="mt-4 -mb-6">
          <Link to="/application-form">
            <button
              className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${isChecked ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
              disabled={!isChecked}
              aria-label="Proceed to register"
            >
              Proceed to Register
            </button>
          </Link>
        </div>
      </div>

      <hr className="mt-16 border-t-2" />

      {/* Footer */}
      <div className="mt-12 text-center">
        <h4 className="text-lg font-bold">
          Warm Regards, <br /> 2025 IOTB TECH ADMISSION TEAM
        </h4>
        <a href="mailto:iotbtechprenuer@gmail.com" className="text-blue-600 mt-2 underline">
          iotbtechprenuer@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Guidelines;
