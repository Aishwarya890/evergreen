import React from "react";
import aboutus from "../assets/aboutus/aboutus.png";
import aboutus1 from "../assets/aboutus/aboutus1.png";
import aboutus2 from "../assets/aboutus/aboutus2.png";
import aboutus3 from "../assets/aboutus/aboutus3.png";
import aboutus4 from "../assets/aboutus/aboutus4.png"; 
import aboutus5 from "../assets/aboutus/aboutus5.png";
import aboutus6 from "../assets/aboutus/aboutus6.png";
import aboutus7 from "../assets/aboutus/aboutus7.png";
import aboutus8 from "../assets/aboutus/aboutus8.png";
import aboutus9 from "../assets/aboutus/aboutus9.png";
import aboutus10 from "../assets/aboutus/aboutus10.png";


const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
        <div className="h-[160px]"></div> 
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-lg uppercase text-green-600 mb-2">About Us</h2>
          <h1 className="text-3xl font-bold mb-4">Welcome to EvenGreener!</h1>
          <p className="text-gray-600">
            Part of a growing group of companies, we have been selling products
            that are designed and manufactured with the planet in mind since
            2000.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={aboutus}
            alt="Thumbs up with plants"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Yorkshire Section */}
      <section className="bg-white px-4 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div>
          <p className="text-green-700 uppercase tracking-[0.15em] text-xs font-medium">
            Meet the Evengreener Team
          </p>
        </div>

        {/* Right Column */}
        <div className="text-left">
          <h2 className="text md:text-4xl font-bold ">
            Based in the heart of Yorkshire, our team is <br />
            passionate about composting and tackling food <br />
            waste, as well as saving water.
          </h2>
          <br></br>

          <p className="text-gray-500 text-sm md:text-base">
            We strive to source new and innovative products to make being EvenGreener as simple as possible.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-[#fefcf7] py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div>
          <img
            src={aboutus1}
            alt="Girl harvesting carrots"
            
          />
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Using our products
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-900 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you live in a flat, have a big family, a small kitchen, or have no access to green space, we’ve got you covered with a product to help you on your EvenGreener journey.
          </p>
          <button className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition">
            SHOP BESTSELLERS
          </button>
        </div>
      </div>
    </section>

      {/* Join the Movement Section */}
      <section className="px-6 py-12 bg-gray-100">
  <h2 className="text-2xl font-bold mb-8 text-center">
    Join the EvenGreener Movement
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white p-4 rounded shadow flex flex-col h-full">
      <img
        src={aboutus2}
        alt="Join Facebook"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <p className="font-semibold mb-2">
        Join our Facebook community of gardeners, recyclers, and zero-wasters.
      </p>
      <button className="mt-auto text-green-700 font-semibold underline hover:text-green-600">
        LIKE US
      </button>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-4 rounded shadow flex flex-col h-full">
      <img
        src={aboutus3}
        alt="Instagram gardening"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <p className="font-semibold mb-2">
        Brighten up your Instagram feed with our eco-lifestyle tips and gardening hacks.
      </p>
      <button className="mt-auto text-green-700 font-semibold underline hover:text-green-600">
        VIEW NOW
      </button>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-4 rounded shadow flex flex-col h-full">
      <img
        src={aboutus4}
        alt="Sustainability newsletter"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <p className="font-semibold mb-2">
        Choose what sustainability news you want to receive with our newsletter.
      </p>
      <button className="mt-auto text-green-700 font-semibold underline hover:text-green-600">
        VIEW NOW
      </button>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-4 rounded shadow flex flex-col h-full">
      <img
        src={aboutus5}
        alt="Nature blog"
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <p className="font-semibold mb-2">
        Blogs to inspire and motivate you to get outdoors and reconnect with nature.
      </p>
      <button className="mt-auto text-green-700 font-semibold underline hover:text-green-600">
        VIEW NOW
      </button>
    </div>
  </div>
</section>
<section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={aboutus6}
            alt="Sustainability Expert"
            className="rounded-md w-64 h-64 object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-2 tracking-wide uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Our dedicated team of sustainability experts are always happy to help
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you call, email, or direct message, our customer service department
            will be on hand to provide exceptional support to guide you through your
            EvenGreener lifestyle.
          </p>
          <button className="px-6 py-2 border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
    <section className="bg-[#f3f1e9] py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-12">
          Shop by category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Compost Bins */}
          <div className="text-center">
            <img
              src={aboutus7}
              alt="Compost Bins"
              className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Bestselling Compost Bins
            </h3>
            <button className="text-green-700 font-semibold hover:underline">
              SHOP NOW
            </button>
          </div>

          {/* Recycling Bins */}
          <div className="text-center">
            <img
              src={aboutus8}
              alt="Recycling Bins"
              className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Bestselling Recycling Bins
            </h3>
            <button className="text-green-700 font-semibold hover:underline">
              SHOP NOW
            </button>
          </div>

          {/* Water Butts */}
          <div className="text-center">
            <img
              src={aboutus9}
              alt="Water Butts"
              className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Bestselling Water Butts
            </h3>
            <button className="text-green-700 font-semibold hover:underline">
              SHOP NOW
            </button>
          </div>

          {/* Accessories */}
          <div className="text-center">
            <img
              src={aboutus10}
              alt="Accessories"
              className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Water Butt Accessories
            </h3>
            <button className="text-green-700 font-semibold hover:underline">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default AboutUs;
