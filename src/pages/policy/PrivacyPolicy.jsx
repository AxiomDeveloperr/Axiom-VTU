import NavBar from '../../components/NavBar';
import PlainArticle from './PlainArticle';
import ListArticle from './ListArticle';
import Footer from '../../sections/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="font-montserrat min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-32 pt-12 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
          Privacy Policy
        </h1>
        <article className="space-y-8 max-w-4xl mx-auto">
          <PlainArticle
            heading="Introduction"
            text="IOTB Tech values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website to apply for tech programs, track your admission, or access study materials."
          />
          <ListArticle
            heading="Information We Collect"
            text="We may collect the following types of data:"
            listItems={[
              'Personal Information: Name, email address, phone number, educational background, and other details required for application.',
              'Usage Data: IP address, browser type, and activity on our website.',
              'Application & Study Data: Records of your application, admission status, and study progress',
            ]}
          />
          <ListArticle
            heading="How We Use Your Information"
            text="We use the collected data for:"
            listItems={[
              'Processing applications and admissions.',
              'Providing access to study materials.',
              'Improving our website and user experience.',
              'Communicating updates and important notifications.',
            ]}
          />
          <PlainArticle
            heading="Data Protection & Security"
            text="We take appropriate security measures to protect your data. However, no online service is 100% secure, so we encourage you to take precautions."
          />
          <ListArticle
            heading="Sharing Your Information"
            text="We do not sell your personal data. We may share it with:"
            listItems={[
              'Educational partners involved in the programs',
              'Service providers helping with website maintenance',
              'Legal authorities if required by law.',
            ]}
          />
          <PlainArticle
            heading="Intellectual Property Rights"
            text="All content on this website, including text, graphics, logos, images, study materials, and software, belongs to IOTB Tech and is protected by copyright and other intellectual property laws. Users are granted a limited, non-exclusive license to access and use the website for personal, non-commercial purposes only. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited."
          />
          <ListArticle
            heading="User Conduct"
            text="You agree to:"
            listItems={[
              'Respect the intellectual property of IOTB Tech.',
              'Not engage in any harmful activities, such as hacking or spreading malware.',
            ]}
          />
          <PlainArticle
            heading="Cookies & Tracking"
            text="We use cookies to enhance user experience. You can manage your cookie preferences in your browser settings."
          />
          <PlainArticle
            heading="Updates to This Policy"
            text="We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date."
          />
          <PlainArticle
            heading="Contact Us"
            text="If you have any questions, contact us at iotbtechprenuer@gmail.com."
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
