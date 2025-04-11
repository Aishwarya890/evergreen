import React from 'react';

const GardenComposting = () => {
  return (
    
   
    
    <div className="flex items-start">
     
     {/* Left vertical label */}
     <div className="flex flex-col justify-center items-center w-10 mr-4">
       <div className="bg-green-700 text-white px-2 py-1 font-semibold text-sm transform -rotate-90 origin-bottom whitespace-nowrap">
         Reviews
       </div>
     </div>

     {/* Main content */}
     <div>
       <h2 className="text-2xl font-bold text-gray-800 mb-2">
         All Composting
       </h2>
       <h3 className="text-md text-green-700 font-semibold mb-4">
         — Bestselling Composters —
       </h3>
       <ul className="list-none space-y-2">
         <li className="hover:text-green-700 transition-colors">
           Hot Composting
         </li>
         <li className="hover:text-green-700 transition-colors">
           Large Compost Bins
         </li>
         <li className="hover:text-green-700 transition-colors">
           Wooden Composters
         </li>
         <li className="hover:text-green-700 transition-colors">
           Bokashi Composting
         </li>
         <li className="hover:text-green-700 transition-colors">
           Wormeries
         </li>
         <li className="hover:text-green-700 transition-colors">
           Tumblers
         </li>
         <li className="hover:text-green-700 transition-colors">
           Composting Accessories
         </li>
         <li className="hover:text-green-700 transition-colors">
           Compost Caddies &amp; Bags
         </li>
       </ul>
     </div>
   </div>
   
    
    
  );
};

export default GardenComposting;
