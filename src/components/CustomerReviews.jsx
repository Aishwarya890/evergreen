import React from "react";
import { FaCheckCircle, FaShareSquare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const reviews = [
  {
    name: "Anne M.",
    initials: "A",
    date: "02/20/24",
    title: "Bought this as a Christmas",
    content:
      "Bought this as a Christmas present for family to use on their allotment. Same as one I bought previously. Very pleased with it.",
    product: "On Harcostar 227 Litre Grey Water Butt Kit",
    rating: 5,
    helpful: { up: 4, down: 0 },
  },
  {
    name: "Anne J.",
    initials: "A",
    date: "01/26/24",
    title: "Great. As big as a",
    content:
      "Great. As big as a wheelie bin so pleased I can leave it with the bins. I need to get the base. Hadn’t really realised that took a while to arrive but communication good.",
    product: "On Blackwall 220 Litre Green Compost Converter",
    rating: 5,
    helpful: { up: 1, down: 0 },
  },
  {
    name: "Paul N.",
    initials: "P",
    date: "01/16/24",
    title: "Ideal water butt",
    content:
      "I like this particular water butt as it looks good, holds a fair amount of water, well made and the top can be taken off to allow quicker filling of watering cans. In consequence I have bought and installed 4 of the butts over the last few years.\nI did receive one where the lid did not fit well, but EvenGreener replaced this without a fuss.",
    product: "On Cloudburst 200 Litre Water Butt Kit",
    rating: 5,
    helpful: { up: 1, down: 1 },
  },
  {
    name: "Andrew S.",
    initials: "A",
    date: "01/14/24",
    title: "Good company and products",
    content:
      "This is my second water butt, good quality and price. Joins together with original butt with kit from EvenGreener so plenty of water for my garden",
    product: "On Harcostar 227 Litre Green Water Butt",
    rating: 5,
    helpful: { up: 1, down: 0 },
  },
  {
    name: "S M.",
    initials: "S",
    date: "01/03/24",
    title: "As I haven't completely used",
    content:
      "As I haven't completely used my Water Butt Freshener, I can't be sure of its effect yet. I do know that my indoor plants really enjoy this water, more than any other I have used. My plants are happy - and so am I.",
    product: "On Be Green 500ml Water Butt Freshener",
    rating: 4,
    helpful: { up: 0, down: 2 },
  },
];

const StarRating = ({ count }) => (
  <div className="flex text-green-500 mb-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const CustomerReviews = () => {
  return (
    
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="h-[180px]"></div> 
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Product Reviews</h2>

      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-gray-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
              {review.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">{review.name}</span>
                <span className="text-gray-500">Verified Buyer</span>
              </div>
              <StarRating count={review.rating} />
              <p className="font-semibold">{review.title}</p>
              <p className="text-gray-700 whitespace-pre-line">{review.content}</p>
              <p className="text-sm text-gray-600 mt-1">{review.product}</p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                <FaShareSquare />
                <span>Share</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">{review.date}</div>
          </div>

          <div className="flex justify-end items-center gap-2 text-sm text-gray-700 mt-2">
            <span>Was This Review Helpful?</span>
            <div className="flex items-center gap-1">
              <FaThumbsUp />
              {review.helpful.up}
            </div>
            <div className="flex items-center gap-1">
              <FaThumbsDown />
              {review.helpful.down}
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4 text-green-900">
        <button className="px-2">&lt;</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            key={n}
            className={`px-2 py-1 rounded ${n === 1 ? "bg-green-200 font-bold" : ""}`}
          >
            {n}
          </button>
        ))}
        <button className="px-2">&gt;</button>
      </div>
    </div>
  );
};

export default CustomerReviews;
