import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="primary-color text-white py-16 px-6 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Your privacy matters. Here's how we handle your personal data at Axiom Subscriptions.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-justify">
        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Axiom Subscriptions. This Privacy Policy explains how we collect, use, and protect your
            personal information when you use our VTU services, including airtime recharge, data
            subscription, cable TV payment, and electricity bills. By accessing or using our platform,
            you agree to the practices described in this policy.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">2. What We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Account Info:</strong> Full name, phone number, email address, and password.</li>
            <li><strong>Transaction Data:</strong> Details of purchases including amount, product type, and payment status.</li>
            <li><strong>Device & Usage Info:</strong> IP address, device model, browser type, location, and session duration.</li>
            <li><strong>Support Records:</strong> Any communication you make with our customer support team.</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">3. Why We Collect It</h2>
          <p>
            We collect your data to ensure smooth operation and improve the overall experience of our platform. Specifically, we use your data to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Process airtime, data, and other VTU transactions.</li>
            <li>Provide responsive customer support and resolve issues.</li>
            <li>Send you relevant updates, alerts, and promotional offers (if you opt-in).</li>
            <li>Analyze user behavior to improve our features and performance.</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">4. How We Secure Your Information</h2>
          <p>
            Your security is our top priority. We implement multiple layers of protection:
            <br /><br />
            All user data is encrypted and securely stored on our servers. We use HTTPS protocols
            for data transmission and restrict access to authorized personnel only. We also regularly
            audit and update our systems to defend against breaches and vulnerabilities.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Sharing</h2>
          <p>
            We do not sell or rent your personal information. However, we may share it with trusted
            third-party services strictly for operational purposes—such as payment gateways,
            telecommunications partners, or legal authorities (if required).
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p>
            We use cookies and similar tracking tools to remember your preferences and improve your
            browsing experience. You can choose to disable cookies via your browser settings, but
            doing so may affect site functionality.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to fulfill the purposes outlined in
            this policy, unless a longer retention period is required by law. You may request account
            deletion at any time.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections or updates to your data.</li>
            <li>Opt-out of marketing communications.</li>
            <li>Request deletion of your data (with limitations).</li>
          </ul>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">9. Policy Updates</h2>
          <p>
            This Privacy Policy may be updated periodically. We will notify users of major changes,
            and the updated version will always be available on this page with a revised date.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>
            For questions or concerns, please contact our support team via email at:{" "}
            <a href="mailto:support@axiomsub.com" className="primary-text underline">
              support@axiomsub.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default PrivacyPolicy;
