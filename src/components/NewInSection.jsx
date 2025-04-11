import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import newInImg from "../assets/newin.png";
import { useState, useContext } from "react";
import product1 from "../assets/product/p1.png";
import product2 from "../assets/product/p2.png";
import product3 from "../assets/product/p3.png";
import product4 from "../assets/product/p4.png";
import product5 from "../assets/product/p5.png";
import { CartContext } from "../components/CartContext";
import { FaStar } from "react-icons/fa"; // ✅ THIS LINE FIXES THE ERROR

export default function NewInSection() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const { addItemToCart, searchQuery } = useContext(CartContext);

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
    {
    id: 6,
    title: "Harcostar 350 Litre Magnum Water Butt Kit",
    price: "£134.99",
    oldPrice: "£149.99",
    reviews: 4,
    image: product5,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 7,
    title: "Harcostar 350 Litre Magnum Water Butt Kit",
    price: "£134.99",
    oldPrice: "£149.99",
    reviews: 4,
    image: product5,
    tags: ["Easy to Use", "Minimalist", "Rich Compost"],
    description:
      "Recycle your food waste, including cooked food, meat, fish and dairy, into quality compost with the...",
  },
  {
    id: 8,
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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleQuickAdd = (product) => {
    addItemToCart(product);
    alert(`${product.title} has been added to your cart!`);
  };
  return (
    <div>
      {/* NEW IN SECTION */}
      <section className="w-full bg-white px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Image */}
          <div>
            <img
              src={newInImg}
              alt="Woman watering plants"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-green-900 mb-6">New In</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Looking for the next best way to{" "}
              <a href="#" className="underline text-green-800 hover:text-green-600">
                reduce food waste
              </a>
              ,{" "}
              <a href="#" className="underline text-green-800 hover:text-green-600">
                save water
              </a>{" "}
              or simply get something new for the garden?
              <br />
              <br />
              Check out our latest additions, and get ahead of the curve with our
              most innovative range of products. From big yet affordable composters,
              to sleek wormeries, with a few of our gorgeous new garden and balcony
              planters thrown in for good measure, we have everything you need to
              equip you for an EvenGreener future!
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & SORT CONTROLS */}
      <div className="flex justify-between items-center w-full py-6 px-4 md:px-10 border-b border-gray-200">
        {/* Left */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 border border-green-900 text-green-900 px-4 py-2 rounded-full hover:bg-green-100 transition"
          >
            <SlidersHorizontal size={16} />
            <span>Filters</span>
          </button>

          <button className="text-xs tracking-widest text-green-900 underline underline-offset-4 hover:text-green-700">
            CLEAR ALL FILTERS
          </button>
        </div>

        {/* Right - Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 border border-green-900 text-green-900 px-4 py-2 rounded-full hover:bg-green-100 transition"
          >
            <span>Relevance</span>
            <ChevronDown size={16} />
          </button>

          {sortOpen && (
            <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 text-sm w-56">
              <li className="flex justify-end px-4 py-2 border-b">
                <button
                  onClick={() => setSortOpen(false)}
                  className="text-green-900 hover:text-green-700"
                >
                  <X size={18} />
                </button>
              </li>
              {[
                "Relevance",
                "Price: Low to High",
                "Price: High to Low",
                "A–Z",
                "Z–A",
                "Rating",
                "Oldest to Newest",
                "Newest to Oldest",
              ].map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-green-50 text-green-900 cursor-pointer"
                  onClick={() => setSortOpen(false)} // Optional: close on selection
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* FILTER PANEL */}
      {filterOpen && (
        <div className="relative bg-gray-50 px-4 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <button
            onClick={() => setFilterOpen(false)}
            className="absolute top-4 right-4 text-green-900 hover:text-green-700"
          >
            <X size={20} />
          </button>

          {/* VENDOR */}
          <div>
            <h3 className="text-green-900 font-bold mb-4">VENDOR</h3>
            {[
              "Wiggly Wigglers (19)",
              "Hyma Garden (8)",
              "Garden In A Tower (6)",
              "Garland Products (6)",
              "Strata (5)",
            ].map((vendor) => (
              <label key={vendor} className="flex items-center mb-2 text-gray-800">
                <input type="checkbox" className="mr-2" />
                {vendor}
              </label>
            ))}
          </div>

          {/* PRODUCT TYPE */}
          <div>
            <h3 className="text-green-900 font-bold mb-4">PRODUCT TYPE</h3>
            {[
              "INDOOR_WORM (14)",
              "INDOOR_BOKASHI (7)",
              "WATER_BUTT (7)",
              "GARDEN_PLANTER (6)",
              "WATER_TANK (6)",
            ].map((type) => (
              <label key={type} className="flex items-center mb-2 text-gray-800">
                <input type="checkbox" className="mr-2" />
                {type}
              </label>
            ))}
          </div>

          {/* PRICE RANGE */}
          <div>
            <h3 className="text-green-900 font-bold mb-4">PRICE</h3>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">£12</span>
              <input type="range" min="12" max="367" className="w-full" />
              <span className="text-gray-700">£367</span>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="group relative border rounded-2xl overflow-hidden shadow-xl h-[500px] bg-white flex flex-col transform transition duration-300 hover:scale-105"
        >
          <div className="relative h-60 w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
            />
            {/* Hover Overlay */}
            {product.description && (
              <div className="absolute inset-0 p-4 flex flex-col justify-center items-center bg-green-900 bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm mb-3 text-center">{product.description}</p>
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
            <h3 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h3>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-bold text-green-800 text-xl">{product.price}</span>
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
                        i < product.reviews ? "text-green-600" : "text-gray-300"
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
      ))}
    </div>

    <hr className="mt-10 border-t border-gray-600" />
  </div>
</div>


    </div>
  );
}
