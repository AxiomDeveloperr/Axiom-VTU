import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html2pdf from "html2pdf.js";
import Footer from "../../components/Footer";

const TermsAndConditions = () => {
  const pdfRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleDownload = () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: "AxiomSubscriptions_Terms_and_Conditions.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="primary-color text-white py-16 px-6 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Please read these terms carefully before using Axiom Subscriptions.
        </p>
        {/* <button
          onClick={handleDownload}
          className="mt-6 bg-white primary-text px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Download as PDF
        </button> */}
      </header>

      {/* Main content to convert to PDF */}
      <main ref={pdfRef} className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-justify">
      <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Axiom Subscriptions, you agree to be bound by these Terms and Conditions.
            If you do not agree to any part of these terms, you may not use our services.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p>
            Axiom Subscriptions provides virtual top-up services including airtime, data subscriptions, electricity
            payments, cable TV subscriptions, result checkers, and more. We act as a facilitator and do
            not own or control third-party services.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide accurate information during account creation and transactions.</li>
            <li>Keep login credentials confidential and secure.</li>
            <li>Refrain from engaging in fraudulent, abusive, or illegal activities.</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">4. Payments & Refunds</h2>
          <p>
            All payments made on Axiom Subscriptions are final and non-refundable except in cases of failed
            transactions where services were not delivered. Refunds will be processed after verification
            and may take up to 5–7 business days.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">5. Account Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time for violating our
            policies, engaging in fraudulent transactions, or disrupting service functionality.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p>
            All content, logos, trademarks, and designs on Axiom Subscriptions are the property of their
            respective owners. You may not reuse, copy, or reproduce them without written permission.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            Axiom Subscriptions shall not be held liable for indirect, incidental, or consequential damages
            arising from the use of our services. We are not responsible for third-party service
            failures or delays beyond our control.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions at any time. Continued use of our platform
            constitutes your agreement to the updated terms. It is your responsibility to review this
            page periodically.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms, please contact us via email:{" "}
            <a href="mailto:support@axiomsubscriptions.com" className="primary-text underline">
              support@axiomsubscriptions.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
