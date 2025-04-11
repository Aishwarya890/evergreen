
// import React, { useContext } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FaStar } from "react-icons/fa";
// import { CartContext } from "../components/CartContext";
// import product1 from "../assets/product/p1.png";
// import product2 from "../assets/product/p2.png";
// import product3 from "../assets/product/p3.png";
// import product4 from "../assets/product/p4.png";
// import product5 from "../assets/product/p5.png";

// const products = [
//   {
//     id: 1,
//     title: "Green Johanna Food Waste Composter",
//     price: "£124.99",
//     oldPrice: null,
//     reviews: 3,
//     image: product1,
//     tags: ["Easy to Use", "Minimalist", "Rich Compost"],
//     description:
//       "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
//   },
//   {
//     id: 2,
//     title: "Green Cone 80 Litre Food Waste Digester",
//     price: "£104.99",
//     oldPrice: null,
//     reviews: 5,
//     image: product2,
//     tags: ["Easy to Use", "Minimalist", "Rich Compost"],
//     description:
//       "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
//   },
//   {
//     id: 3,
//     title: "Harcostar 350 Litre Magnum Water Butt Kit",
//     price: "£134.99",
//     oldPrice: "£149.99",
//     reviews: 4,
//     image: product3,
//     tags: ["Easy to Use", "Minimalist", "Rich Compost"],
//     description:
//       "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
//   },
//   {
//     id: 4,
//     title: "Harcostar 350 Litre Magnum Water Butt Kit",
//     price: "£134.99",
//     oldPrice: "£149.99",
//     reviews: 4,
//     image: product4,
//     tags: ["Easy to Use", "Minimalist", "Rich Compost"],
//     description:
//       "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
//   },
//   {
//     id: 5,
//     title: "Harcostar 350 Litre Magnum Water Butt Kit",
//     price: "£134.99",
//     oldPrice: "£149.99",
//     reviews: 4,
//     image: product5,
//     tags: ["Easy to Use", "Minimalist", "Rich Compost"],
//     description:
//       "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
//   },
// ];
// const { searchQuery } = useContext(CartContext);
//  // Filter products based on the search query (case-insensitive)
//  const filteredProducts = products.filter((product) =>
//   product.title.toLowerCase().includes(searchQuery.toLowerCase())
// );
// const ProductCarousel = () => {
//   const { addItemToCart } = useContext(CartContext);

//   // Handler for quick add button
//   const handleQuickAdd = (product) => {
//     addItemToCart(product);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   return (
//     <div className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-20">
//       <div className="max-w-full mx-auto">
//         {/* Section Header */}
//         <div className="mb-12 text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
//             Other People Love These
//           </h2>
//           <p className="text-gray-700 text-xl max-w-md mx-auto md:mx-0">
//             Discover our bestsellers with premium design & performance.
//           </p>
//         </div>

//         {/* Product Slider */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           navigation={true}
//           modules={[Navigation]}
//           className="productSwiper"
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {filteredProducts.products.map((product) => (
//             <SwiperSlide key={product.id}>
//               <div className="group relative border rounded-2xl overflow-hidden shadow-xl h-[500px] bg-white flex flex-col transform transition duration-300 hover:scale-105">
//                 <div className="relative h-60 w-full">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
//                   />
//                   {/* HOVER OVERLAY */}
//                   {product.description && (
//                     <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-green-900 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300">
//                       <p className="text-sm mb-3 text-center">
//                         {product.description}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-3 justify-center">
//                         {product.tags.map((tag, index) => (
//                           <span
//                             key={index}
//                             className="text-xs border border-white px-2 py-1 rounded-full uppercase tracking-wider"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <button
//                         onClick={() => handleQuickAdd(product)}
//                         className="border border-white px-6 py-2 rounded-full mt-2 bg-white text-green-900 font-semibold hover:bg-green-900 hover:text-white transition duration-300 text-sm shadow"
//                       >
//                         QUICK ADD
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Product Info */}
//                 <div className="p-4 flex-1 flex flex-col justify-between">
//                   <h3 className="font-bold text-lg text-gray-800 mb-2">
//                     {product.title}
//                   </h3>
//                   <div>
//                     <div className="flex items-center space-x-2 mb-1">
//                       <span className="font-bold text-green-800 text-xl">
//                         {product.price}
//                       </span>
//                       {product.oldPrice && (
//                         <span className="line-through text-gray-500 text-sm">
//                           {product.oldPrice}
//                         </span>
//                       )}
//                     </div>
//                     <div className="flex items-center gap-1 text-green-700">
//                       {Array(5)
//                         .fill()
//                         .map((_, i) => (
//                           <FaStar
//                             key={i}
//                             className={`text-sm ${
//                               i < product.reviews
//                                 ? "text-green-600"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({product.reviews} Reviews)
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Horizontal Divider */}
//       <hr className="mt-10 border-t border-gray-600" />

//       {/* Custom Navigation Styling */}
//       <style>{`
//         .swiper-button-next, .swiper-button-prev {
//           background-color: #14532d;
//           color: white;
//           width: 44px;
//           height: 44px;
//           border-radius: 9999px;
//           top: 50%;
//           transform: translateY(-50%);
//           box-shadow: 0 2px 10px rgba(0,0,0,0.15);
//         }
//         .swiper-button-next:hover, .swiper-button-prev:hover {
//           background-color: #166534;
//         }
//         .swiper-button-next::after, .swiper-button-prev::after {
//           font-size: 18px;
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductCarousel;
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../components/CartContext";
import product1 from "../assets/product/p1.png";
import product2 from "../assets/product/p2.png";
import product3 from "../assets/product/p3.png";
import product4 from "../assets/product/p4.png";
import product5 from "../assets/product/p5.png";

const products = [
  {
    id: 1,
    title: "Green Johanna Food Waste Composter",
    price: "£124.99",
    oldPrice: null,
    reviews: 3,
    image: product1,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 2,
    title: "Green Cone 80 Litre Food Waste Digester",
    price: "£104.99",
    oldPrice: null,
    reviews: 5,
    image: product2,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 3,
    title: "Harcostar 350 Litre Magnum Water Butt Kit",
    price: "£134.99",
    oldPrice: "£149.99",
    reviews: 4,
    image: product3,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 4,
    title: "Harcostar 350 Litre Magnum Water Butt Kit",
    price: "£134.99",
    oldPrice: "£149.99",
    reviews: 4,
    image: product4,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 5,
    title: "Harcostar 350 Litre Magnum Water Butt Kit",
    price: "£134.99",
    oldPrice: "£149.99",
    reviews: 4,
    image: product5,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
];

const ProductCarousel = () => {
  // Assuming searchQuery is available in CartContext; if it's in another context,
  // import and use that context instead.
  const { addItemToCart, searchQuery } = useContext(CartContext);

  // Filter products based on the search query (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handler for quick add button
  const handleQuickAdd = (product) => {
    addItemToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-20">
      <div className="max-w-full mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            Other People Love These
          </h2>
          <p className="text-gray-700 text-xl max-w-md mx-auto md:mx-0">
            Discover our bestsellers with premium design & performance.
          </p>
        </div>

        {/* Product Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          navigation={true}
          modules={[Navigation]}
          className="productSwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group relative border rounded-2xl overflow-hidden shadow-xl h-[500px] bg-white flex flex-col transform transition duration-300 hover:scale-105">
                <div className="relative h-60 w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
                  />
                  {/* HOVER OVERLAY */}
                  {product.description && (
                    <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-green-900 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                      <p className="text-sm mb-3 text-center">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 justify-center">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs border border-white px-2 py-1 rounded-full uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="border border-white px-6 py-2 rounded-full mt-2 bg-white text-green-900 font-semibold hover:bg-green-900 hover:text-white transition duration-300 text-sm shadow"
                      >
                        QUICK ADD
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-green-800 text-xl">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="line-through text-gray-500 text-sm">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-green-700">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < product.reviews
                                ? "text-green-600"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      <span className="ml-2 text-xs text-gray-500">
                        ({product.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Horizontal Divider */}
      <hr className="mt-10 border-t border-gray-600" />

      {/* Custom Navigation Styling */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          background-color: #14532d;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background-color: #166534;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
