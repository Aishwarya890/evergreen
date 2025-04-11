// import React from "react";
// import promoImage from "../assets/blackbuket.png"; // Replace with your actual path
// import gardeners from "../assets/gardeners.png"

// const PromoBanner = () => {
//   return (
//     <section className="w-full bg-[#0f3b1f] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 relative overflow-hidden">
//       {/* Left content */}
      
//       <div className="flex-1 z-10 mb-10 md:mb-0 md:pr-10">
//         <div className="flex items-center gap-2 mb-4">
//           <img
//             src={gardeners}
//             alt="Gardeners World Magazine"
//             className="h-10 object-contain"
//           />
//           <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">
//             BEST BUY
//           </span>
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
//           Voted the best 'BUDGET BUY' <br /> in Gardeners' World Magazine
//         </h2>
//         <a
//           href="#"
//           className="text-sm uppercase tracking-wider underline underline-offset-4 hover:text-green-300 transition"
//         >
//           Get yours now
//         </a>
//       </div>

//       {/* Center image */}
//       <div className="relative flex-1 z-0 flex justify-center">
//         <img
//           src={promoImage}
//           alt="Blackwall Compost Bin"
//           className="max-h-[700px] md:max-h-[700px] object-contain md:absolute md:bottom-2"
//         />
//       </div>

//       {/* Right content */}
//       <div className="flex-1 z-10 mt-10 md:mt-0 md:pl-10">
//         <h3 className="text-xl md:text-2xl font-bold mb-4">
//           Blackwall 220 Litre Black Compost Converter.
//         </h3>
//         <p className="text-base md:text-lg mb-6 text-gray-100">
//           With 3+ million sold to date, this is the UK’s best-selling compost bin, and for a reason. Expertly designed for simple use, transform all organic waste into nutritious, valuable feed to enrich your soil and nurture your garden.
//         </p>
//         <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-900 transition font-semibold">
//           SHOP PRODUCT
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PromoBanner;
import React from "react";
import promoImage from "../assets/blackbuket.png";
import gardeners from "../assets/gardeners.png";

const PromoBanner = () => {
  return (
    <section className="w-full bg-[#0f3b1f] text-white px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <img
              src={gardeners}
              alt="Gardeners World Magazine"
              className="h-10 object-contain"
            />
            <span className="bg-red-600 text-xs font-semibold px-3 py-1 rounded-full">
              BEST BUY
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
            Voted the best 'BUDGET BUY'
            <br /> in Gardeners' World Magazine
          </h2>
          <a
            href="#"
            className="inline-block text-sm uppercase tracking-wider underline underline-offset-4 hover:text-green-300 transition"
          >
            Get yours now
          </a>
        </div>

        {/* Center Image */}
        <div className="flex-1 flex justify-center z-0">
          <img
            src={promoImage}
            alt="Blackwall Compost Bin"
            className="max-h-[450px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Blackwall 220 Litre Black Compost Converter.
          </h3>
          <p className="text-base md:text-lg mb-6 text-gray-100 leading-relaxed">
            With 3+ million sold to date, this is the UK’s best-selling compost bin, and for a reason. Expertly designed for simple use, transform all organic waste into nutritious, valuable feed to enrich your soil and nurture your garden.
          </p>
          <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-900 transition font-semibold">
            SHOP PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
