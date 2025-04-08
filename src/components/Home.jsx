import React from 'react';
import home1 from "../assets/home1.png";
import { motion } from "framer-motion";
import categoryc1 from "../assets/category/c1.png";
import categoryc2 from "../assets/category/c2.png"; 
import categoryc3 from "../assets/category/c3.png";
import categoryc4 from "../assets/category/c4.png";
import categoryc5 from "../assets/category/c5.png";
import categoryc6 from "../assets/category/c6.png";
import categoryc7 from "../assets/category/c7.png";
import categoryc8 from "../assets/category/c8.png";


const Home = () => {
  const categories = [
    { title: "New In", image: categoryc1, link: "#" },
    { title: "Food Waste Solutions", image: categoryc2, link: "#" },
    { title: "Gifts for Gardeners", image: categoryc3, link: "#" },
    { title: "Bestselling Compost Bins", image: categoryc4, link: "#" },
    { title: "For Home", image: categoryc5, link: "#" },
    { title: "Eco Living", image: categoryc6, link: "#" },
    { title: "Recycling Essentials", image: categoryc7, link: "#" },
    { title: "Garden Decor", image: categoryc8, link: "#" },
  ];

  return (
    <div className="mt-[80px] relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh]">
      <img
        src={home1}
        alt="Garden Banner"
        className="w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 text-white"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
          NEW SEASON, NEW PRODUCTS
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
          Find your new favourite items for your garden!
        </p>
      </motion.div>

      <div className="bg-[#f3f0e9] py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-green-900">
          Shop by category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.link}
              className="group block overflow-hidden rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-green-900 text-center">
                  {cat.title}
                </h3>
                <div className="mt-2 flex justify-center">
  <a
    href={cat.link}
    className="text-green-800 font-medium border-b-2 border-green-600 hover:text-green-600 transition"
  >
    SHOP NOW
  </a>
</div>

              </div>
            </a>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
