import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sec1 from "../assets/sec1.png";
import sec2 from "../assets/sec2.png";

const testimonials = [
  {
    image: sec1,
    quote:
      "These are the second and third water butts we have bought from EvenGreener. Good quality, come with everything you need to get them installed. Really quick delivery. Will definitely buy from you again.",
    author: "Karen W.",
  },
  {
    image: sec2,
    quote:
      "Fantastic service and the water butt is perfect for our garden. Highly recommend EvenGreener!",
    author: "John D.",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { image, quote, author } = testimonials[index];

  return (
    <div className="flex flex-col md:flex-row w-full h-full relative">
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative">
        <img src={image} alt="testimonial" className="w-full h-full object-cover" />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 bg-green-800 text-white p-10 flex flex-col justify-center relative">
        <p className="text-2xl font-bold mb-6">“{quote}”</p>
        <p className="text-lg font-semibold mb-6">{author}</p>
        <button className="px-6 py-3 border border-white rounded-full w-fit hover:bg-white hover:text-green-800 transition">
          SHOP RAINSAVERS
        </button>

        {/* Arrows Below Button */}
        <div className="mt-6 flex gap-4">
          <div
            className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div
            className="cursor-pointer p-2 border border-white rounded-full hover:bg-white hover:text-green-800 transition"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
