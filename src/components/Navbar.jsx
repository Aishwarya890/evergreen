
import React, { useState, useContext } from 'react';
import { 
  FaTiktok, FaYoutube, FaInstagram, FaFacebookF, FaPinterestP, 
  FaSearch, FaHeart, FaUser, FaShoppingBag, FaBars, FaTimes 
} from 'react-icons/fa';
import LogoImg from "../assets/logo.png";
import watersaving from "../assets/watersaving.png";
import gardeningImage from "../assets/home1.png";
import brandsImage from "../assets/brands.png";
import { CartContext } from "../components/CartContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { setCartOpen } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const { searchQuery, setSearchQuery } = useContext(CartContext);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // When you hover over a link, set that link as active
  const handleMouseEnter = (label) => {
    if (label === "GARDEN COMPOSTING") {
      setActiveLink("GARDEN COMPOSTING");
    }
    if (label === "FOOD WASTE COMPOSTING") {
      setActiveLink("FOOD WASTE COMPOSTING");
    }
    if (label === "WATER SAVING") {
      setActiveLink("WATER SAVING");
    }
    if (label === "GARDENING") {
      setActiveLink("GARDENING");
    }
    if (label === "BRANDS") { 
      setActiveLink("BRANDS");
    }
  };

  // When mouse leaves the link or the panel, clear activeLink
  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  // The main list of nav labels
  const navItems = [
    "GARDEN COMPOSTING",
    "FOOD WASTE COMPOSTING",
    "WATER SAVING",
    "GARDENING",
    "BRANDS"
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        {/* Top Bar */}
        <div className="bg-green-800 text-white flex justify-center items-center 
                        px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-[18px] font-medium">
          <span className="block md:hidden">
            <a href="#">FREE UK Delivery Over £65*</a>
          </span>
          <div className="hidden md:flex justify-between w-full">
            <a href="/new-in" className="underline">NEW IN</a>
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

          {/* Logo - shift right when search is open */}
          <div className={`flex-grow ${searchOpen ? "text-right" : "text-center"}`}>
            <a href="#">
              <img
                src={LogoImg}
                alt="Even Greener Logo"
                className="h-10 sm:h-12 md:h-16 mx-auto md:mx-0 inline-block"
              />
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 text-gray-700">
            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center space-x-1 text-[20px] sm:text-[24px] md:text-[32px]"
              aria-label="Open search"
            >
              <FaSearch />
            </button>

            {/* Extra icons visible on md and up */}
            <div className="hidden md:flex space-x-3 sm:space-x-4 md:space-x-5">
              <a href="#">
                <FaHeart className="text-[20px] sm:text-[24px] md:text-[32px]" />
              </a>
              <a href="/login">
                <FaUser className="text-[20px] sm:text-[24px] md:text-[32px]" />
              </a>
              <button
                onClick={() => setCartOpen(true)}
                className="relative focus:outline-none"
                aria-label="Open cart"
              >
                <FaShoppingBag className="text-[20px] sm:text-[24px] md:text-[32px]" />
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-600 text-white rounded-full px-1 sm:px-2 text-[8px] sm:text-xs md:text-xs">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar - appears between top bar and green bar */}
        {searchOpen && (
          <div className="bg-white-100 py-3 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center">
              <input
                type="text" value={searchQuery}
                onChange={handleChange}
                placeholder="Type to search..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-4 text-gray-700"
                aria-label="Close search"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Nav Links for Desktop */}
        <div className="bg-white border-t px-4 sm:px-6 md:px-8 py-4 shadow-sm hidden md:block">
          <div className="flex justify-center space-x-4 sm:space-x-6 font-semibold tracking-wider text-gray-700 
                          text-[16px] sm:text-[18px] md:text-[20px]">
            {navItems.map((label, index) => (
              <a
                key={index}
                href="#"
                className="relative group"
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="transition-colors duration-200">{label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 transition-all 
                                 duration-300 group-hover:w-full"></span>
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
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 border-b">
              <div></div>
              <div className="flex items-center space-x-4">
                <a href="#"><FaHeart className="text-[24px] sm:text-[28px] text-gray-700" /></a>
                <a href="/login"><FaUser className="text-[24px] sm:text-[28px] text-gray-700" /></a>
                <button
                onClick={() => setCartOpen(true)}
                className="relative focus:outline-none"
                aria-label="Open cart"
              >
                <FaShoppingBag className="text-[20px] sm:text-[24px] md:text-[32px]" />
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-600 text-white rounded-full px-1 sm:px-2 text-[8px] sm:text-xs md:text-xs">
                  {cartItems.length}
                </span>
              </button>
                <button onClick={toggleMobileMenu} aria-label="Close Menu">
                  <FaTimes className="text-[24px] sm:text-[28px] text-gray-700" />
                </button>
              </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pt-4">
              {navItems.map((label, index) => (
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
            <div className="flex justify-center space-x-4 mt-6 pb-6">
              <a href="https://www.tiktok.com/@evengreener">
                <FaTiktok className="text-[24px] sm:text-[28px] text-gray-700" />
              </a>
              <a href="https://www.youtube.com/@EvenGreenerUK">
                <FaYoutube className="text-[24px] sm:text-[28px] text-gray-700" />
              </a>
              <a href="https://www.instagram.com/evengreener_store/">
                <FaInstagram className="text-[24px] sm:text-[28px] text-gray-700" />
              </a>
              <a href="https://www.facebook.com/EvenGreener/">
                <FaFacebookF className="text-[24px] sm:text-[28px] text-gray-700" />
              </a>
              <a href="https://uk.pinterest.com/evengreener/">
                <FaPinterestP className="text-[24px] sm:text-[28px] text-gray-700" />
              </a>
            </div>
          </div>
        )}

        {/* Green Bar */}
        <div className="bg-lime-500 text-center text-white py-3 sm:py-4 md:py-4 text-xs sm:text-sm md:text-[18px] font-medium">
          20+ Years Trading Online
        </div>
      </nav>

      {/* (Hover Panels for Desktop Navigation remain unchanged) */}
      {activeLink === "GARDEN COMPOSTING" && (
        <div
          className="bg-gray-100 px-4 sm:px-6 md:px-8 py-6 shadow-md mt-[220px] max-w-9xl mx-auto relative h-[700px]"
          onMouseEnter={() => handleMouseEnter("GARDEN COMPOSTING")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[170px]"></div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                All Composting
              </h2>
            </div>
            <div className="md:w-1/3 text-center">
              <h3 className="text-md sm:text-lg md:text-xl text-green-700 font-semibold mb-6">
                — Bestselling Composters —
              </h3>
              <ul className="list-none space-y-2 text-gray-800 text-sm sm:text-base md:text-lg">
                <li className="hover:text-green-700 transition-colors">Hot Composting</li>
                <li className="hover:text-green-700 transition-colors">Large Compost Bins</li>
                <li className="hover:text-green-700 transition-colors">Wooden Composters</li>
                <li className="hover:text-green-700 transition-colors">Bokashi Composting</li>
                <li className="hover:text-green-700 transition-colors">Wormeries</li>
                <li className="hover:text-green-700 transition-colors">Tumblers</li>
                <li className="hover:text-green-700 transition-colors">Composting Accessories</li>
                <li className="hover:text-green-700 transition-colors">Compost Caddies &amp; Bags</li>
              </ul>
            </div>
            <div className="md:w-1/3"></div>
          </div>
        </div>
      )}

      {activeLink === "FOOD WASTE COMPOSTING" && (
        <div
          className="bg-gray-100 px-4 sm:px-6 md:px-8 py-6 shadow-md mt-[220px] max-w-9xl mx-auto relative h-[700px]"
          onMouseEnter={() => handleMouseEnter("FOOD WASTE COMPOSTING")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[170px]"></div>
          <div className="flex">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full">
              <div className="md:w-1/3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-2 text-left border-b-2 border-green-700 pb-1 w-fit">
                  All Food Waste
                </h2>
              </div>
              <div className="md:w-2/3">
                <ul className="list-none space-y-2 text-black-900 text-sm sm:text-base md:text-lg text-left">
                  <li className="hover:text-green-700 transition-colors">Green Johanna Hot Composter</li>
                  <li className="hover:text-green-700 transition-colors">Green Cone Food Waste Digester</li>
                  <li className="hover:text-green-700 transition-colors">HOTBIN Composters</li>
                  <li className="hover:text-green-700 transition-colors">Bokashi Bins</li>
                  <li className="hover:text-green-700 transition-colors">Worm Farms</li>
                  <li className="hover:text-green-700 transition-colors">Other Food Waste Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeLink === "WATER SAVING" && (
        <div
          className="bg-gray-100 px-4 sm:px-6 md:px-8 py-6 shadow-md mt-[220px] max-w-9xl mx-auto relative"
          onMouseEnter={() => handleMouseEnter("WATER SAVING")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[80px]"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4 text-left border-b-2 border-green-700 pb-1 w-fit">
                Water Saving Solutions
              </h2>
            </div>
            <div className="md:w-1/3">
              <ul className="list-none space-y-3 text-gray-800 text-lg sm:text-base md:text-lg text-left">
                <li className="hover:text-green-700 transition-colors">Rainwater Harvesting Systems</li>
                <li className="hover:text-green-700 transition-colors">Smart Irrigation Controllers</li>
                <li className="hover:text-green-700 transition-colors">Drip Irrigation Kits</li>
                <li className="hover:text-green-700 transition-colors">Water-saving Fixtures</li>
                <li className="hover:text-green-700 transition-colors">Leak Detection Devices</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <img
                src={watersaving}
                alt="Water Saving"
                className="max-w-[600px] h-[600px] rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      )}

      {activeLink === "GARDENING" && (
        <div
          className="bg-gray-100 px-4 sm:px-6 md:px-8 py-6 shadow-md mt-[220px] max-w-9xl mx-auto relative"
          onMouseEnter={() => handleMouseEnter("GARDENING")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[80px]"></div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-1/3 text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4 border-b-2 border-green-700 pb-1 w-fit">
                Gardening Tips &amp; Tools
              </h2>
            </div>
            <div className="md:w-1/3">
              <ul className="list-none space-y-3 text-green-900 text-sm sm:text-base md:text-lg text-left">
                <li className="hover:text-green-700 transition-colors">Organic Gardening Practices</li>
                <li className="hover:text-green-700 transition-colors">Tool Recommendations</li>
                <li className="hover:text-green-700 transition-colors">Seasonal Planting Guides</li>
                <li className="hover:text-green-700 transition-colors">DIY Garden Projects</li>
                <li className="hover:text-green-700 transition-colors">Plant Care Tips</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <img 
                src={gardeningImage} 
                alt="Gardening" 
                className="max-w-full h-[550px] rounded-md shadow-md transition-all duration-300 hover:h-[600px]" 
              />
            </div>
          </div>
        </div>
      )}

      {activeLink === "BRANDS" && (
        <div
          className="bg-gray-100 px-4 sm:px-6 md:px-8 py-6 shadow-md mt-[220px] max-w-9xl mx-auto relative"
          onMouseEnter={() => handleMouseEnter("BRANDS")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[80px]"></div>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4 border-b-2 border-green-700 pb-1 w-fit">
                Shop By Brands
              </h2>
            </div>
            <div className="md:w-1/3">
              <ul className="list-none space-y-3 text-green-900 text-sm sm:text-base md:text-lg">
                <li className="hover:text-green-700 transition-colors">Blackwall</li>
                <li className="hover:text-green-700 transition-colors">Cloudburst</li>
                <li className="hover:text-green-700 transition-colors">Graf & Garantia</li>
                <li className="hover:text-green-700 transition-colors">Green Johanna</li>
                <li className="hover:text-green-700 transition-colors">Harcostar</li>
              </ul>
            </div>
            <div className="flex justify-center items-center md:w-1/3">
              <img
                src={brandsImage}
                alt="Brands"
                className="max-w-full h-[550px] rounded-md shadow-md transition-all duration-300 hover:h-[500px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


