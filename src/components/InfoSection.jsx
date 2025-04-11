import React from 'react';
import { FaHandshake, FaIndustry, FaRecycle } from "react-icons/fa"; // Using React Icons

const InfoSection = () => {
  const items = [
    {
      icon: <FaHandshake className="text-green-800 text-4xl" />,
      title: "Service You Can Count On",
      description: "Our Customer Care Team is here to help.",
    },
    {
      icon: <FaIndustry className="text-green-800 text-4xl" />,
      title: "Our Bestsellers",
      description: "Are made from recycled plastic.",
    },
    {
      icon: <FaRecycle className="text-green-800 text-4xl" />,
      title: "We Support a Circular Economy",
      description: "By turning waste into products.",
    },
  ];

  return (
    <div className="bg-[#f3f0e9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border border-transparent md:divide-x">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-5 px-6 py-6">
            {item.icon}
            <div>
              <a href="#" className="hover:text-green-700 transition duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              </a>
              <p className="text-base text-gray-800">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
