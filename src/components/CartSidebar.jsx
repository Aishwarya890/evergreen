// import React, { useContext } from 'react';
// import { CartContext } from '../components/CartContext';

// const CartSidebar = () => {
//   const {
//     isCartOpen,
//     setCartOpen,
//     cartItems,
//     increaseQuantity,
//     decreaseQuantity,
//   } = useContext(CartContext);

//   const subtotal = cartItems.reduce((acc, item) => {
//     const price = parseFloat(item.price.replace("£", ""));
//     return acc + price * item.quantity;
//   }, 0);

//   return (
//     <div
//       className={`fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-lg z-50 transform ${
//         isCartOpen ? "translate-x-0" : "translate-x-full"
//       } transition-transform duration-300`}
//       aria-label="Shopping cart sidebar"
//     >
//       <div className="h-[180px]"></div>
//       {/* Header */}
//       <div className="p-4 border-b flex justify-between items-center">
//         <h2 className="text-xl font-bold">Your Cart</h2>
//         <button
//           onClick={() => setCartOpen(false)}
//           className="text-xl font-bold text-gray-700 hover:text-black"
//           aria-label="Close cart"
//         >
//           &times;
//         </button>
//       </div>

//       {/* Cart Items */}
//       <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
//         {cartItems.length === 0 ? (
//           <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => {
//             const price = parseFloat(item.price.replace("£", ""));
//             return (
//               <div key={item.id} className="flex mb-4 border-b pb-3">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-16 h-16 object-cover rounded mr-4"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
//                   <p className="text-gray-600 mb-1">£{price.toFixed(2)}</p>
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => decreaseQuantity(item.id)}
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       aria-label="Decrease quantity"
//                     >
//                       -
//                     </button>
//                     <span className="mx-3">{item.quantity}</span>
//                     <button
//                       onClick={() => increaseQuantity(item.id)}
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       aria-label="Increase quantity"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* Footer */}
//       <div className="p-4 border-t">
//         <div className="flex justify-between mb-2">
//           <span className="font-semibold">Subtotal</span>
//           <span className="font-semibold">£{subtotal.toFixed(2)}</span>
//         </div>
//         <p className="text-sm text-gray-500 mb-4">
//           Shipping, discounts and loyalty points will be calculated at next step.
//         </p>
//         <button className="bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded mb-2">
//           GO TO CART
//         </button>
//         <button className="bg-black hover:bg-gray-900 text-white w-full py-2 rounded">
//           CONTINUE TO CHECKOUT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartSidebar;
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const CartSidebar = () => {
  const {
    isCartOpen,
    setCartOpen,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("£", ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 max-w-full bg-white shadow-2xl z-50 transform ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 flex flex-col`}
      aria-label="Shopping cart sidebar"
    >
      {/* Header */}
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button
          onClick={() => setCartOpen(false)}
          className="text-3xl font-bold text-gray-600 hover:text-gray-800"
          aria-label="Close cart"
        >
          &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-4 overflow-y-auto flex-1">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => {
            const price = parseFloat(item.price.replace("£", ""));
            return (
              <div key={item.id} className="flex mb-6 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">£{price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-4 bg-gray-100">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Subtotal:</span>
          <span className="text-lg font-bold">£{subtotal.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Shipping and additional costs are calculated at checkout.
        </p>
        <a href="/view-cart">
        <button className="w-full mb-3 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded">
          View Cart
        </button>
        </a>
        <button className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
