import NavBar from '../../components/NavBar';
import Footer from '../../sections/Footer';
import PlainArticle from './PlainArticle';
import ListArticle from './ListArticle';

const TermsCondition = () => {
  return (
    <div className="font-montserrat min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-32 pt-12 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
          Terms and Conditions
        </h1>
        <article className="space-y-8 max-w-4xl mx-auto">
          <PlainArticle
            heading="Introduction"
            text="By using the IOTB Tech website, you agree to these Terms & Conditions. Please read them carefully."
          />
          <ListArticle
            heading="Use of Our Website"
            text=""
            listItems={[
              "You must provide accurate information when applying.",
              "You are responsible for maintaining the confidentiality of your account.",
              "Misuse of the platform, such as fraud or unauthorized access, is prohibited.",
            ]}
          />
          <ListArticle
            heading="Admission & Study Materials"
            text=""
            listItems={[
              "Admission decisions are based on test performance and other criteria.",
              "Study materials provided are for educational use only and must not be redistributed.",
            ]}
          />
          <ListArticle
            heading="User Conduct"
            text="You agree to:"
            listItems={[
              "Respect the intellectual property of IOTB Tech",
              "Not engage in any harmful activities, such as hacking or spreading malware.",
            ]}
          />
          <PlainArticle
            heading="Limitation of Liability"
            text="To the extent allowed by law, we are not responsible for indirect losses, such as lost data or service interruptions, unless caused by our gross negligence."
          />
          <PlainArticle
            heading="Termination of Access"
            text="We reserve the right to suspend or terminate your access if you violate these Terms."
          />
          <PlainArticle
            heading="Changes to Terms"
            text="We may update these Terms from time to time. Continued use of our website means you accept the changes."
          />
          <PlainArticle
            heading="Contact Information"
            text="For questions, contact us at iotbtechprenuer@gmail.com."
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsCondition;