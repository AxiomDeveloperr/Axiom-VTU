import React from 'react';
import logo from '../assets/axiomdev.svg';

function Footer() {
  return (
    <footer className="primary-color text-left primary-font text-white">
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <img className="mb-4 w-32" src={logo} alt="Axiom Logo" />
          <p className="leading-relaxed max-w-md">
            We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes), Electricity Bill Payment and more.
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-1 text-sm text-gray-200">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Get In Touch</h2>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>08133509187</li>
              <li>support@axiom.com</li>
              <li>FCT, Abuja</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Social Media</h2>
            <ul className="space-y-1 text-sm text-gray-200">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 text-center text-sm py-4">
        <p>Developed by Axiom Developers &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
