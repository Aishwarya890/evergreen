import React, { useState } from 'react';
import { 
  FaTiktok, FaYoutube, FaInstagram, FaFacebookF, FaPinterestP, 
  FaSearch, FaHeart, FaUser, FaShoppingBag, FaBars, FaTimes 
} from 'react-icons/fa';
import LogoImg from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-green-800 text-white flex justify-center items-center 
                      px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-[18px] font-medium">
        {/* On mobile: show only this text */}
        <span className="block md:hidden">
          <a href="#">FREE UK Delivery Over £65*</a>
        </span>
        {/* On md and up: show all three links */}
        <div className="hidden md:flex justify-between w-full">
          <a href="#" className="underline">NEW IN</a>
          <a href="#" className="underline">FREE UK Delivery Over £65*</a>
          <a href="#" className="underline">BULK BUY OPTIONS AVAILABLE</a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 border-b shadow-sm">
        {/* Social Icons - visible on md and up */}
        <div className="hidden md:flex space-x-3 sm:space-x-4 md:space-x-5 text-[20px] sm:text-[24px] md:text-[32px] text-gray-700">
          <a href="https://www.tiktok.com/@evengreener"><FaTiktok /></a>
          <a href="https://www.youtube.com/@EvenGreenerUK"><FaYoutube /></a>
          <a href="https://www.instagram.com/evengreener_store/"><FaInstagram /></a>
          <a href="https://www.facebook.com/EvenGreener/"><FaFacebookF /></a>
          <a href="https://uk.pinterest.com/evengreener/"><FaPinterestP /></a>
        </div>

        {/* Logo */}
        <div className="flex-grow text-center">
          <a href="#">
            <img
              src={LogoImg}
              alt="Even Greener Logo"
              className="h-10 sm:h-12 md:h-16 mx-auto"
            />
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 text-gray-700">
          {/* Always show Search */}
          <a href="#" className="flex items-center space-x-1 text-[20px] sm:text-[24px] md:text-[32px]">
            <FaSearch />
            {/* <span className="hidden sm:inline text-xs sm:text-sm md:text-base">Search</span> */}
          </a>
          {/* Extra icons visible on md and up */}
          <div className="hidden md:flex space-x-3 sm:space-x-4 md:space-x-5">
            <a href="#"><FaHeart className="text-[20px] sm:text-[24px] md:text-[32px]" /></a>
            <a href="/login"><FaUser className="text-[20px] sm:text-[24px] md:text-[32px]" /></a>
            <a href="#" className="relative">
              <FaShoppingBag className="text-[20px] sm:text-[24px] md:text-[32px]" />
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-600 text-white rounded-full 
                               px-1 sm:px-2 text-[8px] sm:text-xs md:text-xs">
                0
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Nav Links for Desktop */}
      <div className="bg-white border-t px-4 sm:px-6 md:px-8 py-4 shadow-sm hidden md:block">
        <div className="flex justify-center space-x-4 sm:space-x-6 font-semibold tracking-wider text-gray-700 
                        text-[16px] sm:text-[18px] md:text-[20px]">
          {["GARDEN COMPOSTING", "FOOD WASTE COMPOSTING", "WATER SAVING", "GARDENING", "BRANDS"].map((label, index) => (
            <a key={index} href="#" className="relative group">
              <span className="transition-colors duration-200">{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="bg-white border-t px-4 sm:px-6 md:px-8 py-4 shadow-sm md:hidden flex justify-end">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? (
            <FaTimes className="text-[24px] sm:text-[28px] text-gray-700" />
          ) : (
            <FaBars className="text-[24px] sm:text-[28px] text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-auto">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 border-b">
            <div></div> {/* Placeholder for left side */}
            <div className="flex items-center space-x-4">
              {/* Right Side Icons in Mobile Overlay */}
              <a href="#"><FaHeart className="text-[24px] sm:text-[28px] text-gray-700" /></a>
              <a href="#"><FaUser className="text-[24px] sm:text-[28px] text-gray-700" /></a>
              <a href="#" className="relative">
                <FaShoppingBag className="text-[24px] sm:text-[28px] text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full px-1 text-[8px] sm:text-xs">
                  0
                </span>
              </a>
              {/* Close Button */}
              <button onClick={toggleMobileMenu} aria-label="Close Menu">
                <FaTimes className="text-[24px] sm:text-[28px] text-gray-700" />
              </button>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="px-4 sm:px-6 md:px-8 pt-4">
            {["GARDEN COMPOSTING", "FOOD WASTE COMPOSTING", "WATER SAVING", "GARDENING", "BRANDS"].map((label, index) => (
              <a
                key={index}
                href="#"
                className="block py-3 border-b text-[18px] sm:text-[20px] font-semibold text-gray-700"
                onClick={toggleMobileMenu}
              >
                {label}
              </a>
            ))}
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6 pb-6">
            <a href="https://www.tiktok.com/@evengreener"><FaTiktok className="text-[24px] sm:text-[28px] text-gray-700" /></a>
            <a href="https://www.youtube.com/@EvenGreenerUK"><FaYoutube className="text-[24px] sm:text-[28px] text-gray-700" /></a>
            <a href="https://www.instagram.com/evengreener_store/"><FaInstagram className="text-[24px] sm:text-[28px] text-gray-700" /></a>
            <a href="https://www.facebook.com/EvenGreener/"><FaFacebookF className="text-[24px] sm:text-[28px] text-gray-700" /></a>
            <a href="https://uk.pinterest.com/evengreener/"><FaPinterestP className="text-[24px] sm:text-[28px] text-gray-700" /></a>
          </div>
        </div>
      )}

      {/* Green Bar */}
      <div className="bg-lime-500 text-center text-white py-3 sm:py-4 md:py-4 text-xs sm:text-sm md:text-[18px] font-medium">
        20+ Years Trading Online
      </div>
    </nav>
  );
};

export default Navbar;
