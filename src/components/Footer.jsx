import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import footerimg from "../assets/footerimg.png";

import visaLogo from "../assets/visa.png";
import paypalLogo from "../assets/paypal.png";
import mastercardLogo from "../assets/mastercard.png";
import applepayLogo from "../assets/apay.png";
import googlepayLogo from "../assets/gpay2.png";
import amexLogo from "../assets/shop.png";
import klarnaLogo from "../assets/diners.png";
import discoverLogo from "../assets/discover.png";
import shopifyLogo from "../assets/amx.png";

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-[#1b3b2a] px-6 py-12 md:px-20 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join our EvenGreener Gang!
        </h2>
        <p className="text-lg mb-6 max-w-xl leading-relaxed">
          Sign up for discounts, product updates, composting and water saving tips, and much more.
        </p>
        <form className="flex flex-col sm:flex-row w-full max-w-md mb-6">
          <input
            type="email"
            placeholder="Email address"
            className="px-5 py-3 text-white border border-white bg-transparent rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none placeholder-white focus:outline-none w-full sm:w-auto sm:flex-grow"
          />
          <button
            type="submit"
            className="bg-transparent border border-white text-white px-5 py-3 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none hover:bg-white hover:text-green-900 transition w-full sm:w-auto"
          >
            SUBSCRIBE
          </button>
        </form>
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300"><FaPinterestP /></a>
          <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-800 text-white px-6 py-12 md:px-20">
        {/* Logo */}
        <div className="flex mb-12">
          <img src={footerimg} alt="Footer Logo" className="h-16" />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-lg mb-12">
          <div>
            <h4 className="font-semibold mb-3 uppercase">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#">Bestsellers</a></li>
              <li><a href="#">Composters</a></li>
              <li><a href="#">Water Butts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 uppercase">Good to Know</h4>
            <ul className="space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Bulk Enquiries</a></li>
              <li><a href="#">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 uppercase">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 uppercase">Account</h4>
            <ul className="space-y-2">
              <li><a href="#">Manage Account</a></li>
              <li><a href="#">Orders & Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 uppercase">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#">T&Cs</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 uppercase">Support</h4>
            <ul className="space-y-2">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Delivery & Returns</a></li>
              <li><a href="#">Blogs & Guides</a></li>
            </ul>
          </div>
        </div>

        {/* Contact + Payment */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-t border-white pt-6 text-lg">
          <div className="mb-6 lg:mb-0">
            <h4 className="font-semibold mb-2 uppercase">Get in Touch</h4>
            <p className="mb-1">
              <strong>Email</strong> <br />
              <a href="">customer.care@evengreener.com</a>
            </p>
            <p>
              <strong>Phone</strong> <br />
              0800 316 4454 (Freephone)
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <a href="#"><img src={amexLogo} alt="American Express" className="h-6" /></a>
            <a href="#"><img src={applepayLogo} alt="Apple Pay" className="h-6" /></a>
            <a href="#"><img src={discoverLogo} alt="Discover" className="h-6" /></a>
            <a href="#"><img src={googlepayLogo} alt="Google Pay" className="h-6" /></a>
            <a href="#"><img src={klarnaLogo} alt="Klarna" className="h-6" /></a>
            <a href="#"><img src={mastercardLogo} alt="Mastercard" className="h-6" /></a>
            <a href="#"><img src={paypalLogo} alt="Paypal" className="h-6" /></a>
            <a href="#"><img src={shopifyLogo} alt="Shopify" className="h-6" /></a>
            <a href="#"><img src={visaLogo} alt="Visa" className="h-6" /></a>
          </div>
        </div>

        <div className="mt-6 text-sm text-center">
          © 2025 EvenGreener. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
