import React from "react";
import blog1 from "../assets/blog.png"; // Image of woman with water butt
import blog2 from "../assets/blog1.png"; // Image of compost bin

const BlogSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Intro */}
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-widest text-gray-500">
            From the blog
          </p>
          <h2 className="text-3xl font-extrabold text-green-900 leading-snug">
            Helping you lead an <br />
            EvenGreener <br />
            lifestyle
          </h2>
          <button className="bg-green-800 text-white px-6 py-3 rounded-[1.5rem] font-medium hover:bg-green-900 transition">
            VIEW BLOG
          </button>
        </div>

        {/* Blog Post 1 */}
        <div>
          <img
            src={blog1}
            alt="How to Install a Water Butt"
            className="w-full h-auto mb-4"
          />
          <h3 className="text-lg font-bold text-green-900 mb-2">
            Save Money and the Environment: How to fit a Water Butt
          </h3>
          <p className="text-sm text-gray-500">4 minute read.</p>
        </div>

        {/* Blog Post 2 */}
        <div>
          <img
            src={blog2}
            alt="What Are Compost Bins?"
            className="w-full h-auto mb-4"
          />
          <h3 className="text-lg font-bold text-green-900 mb-2">
            What Are Compost Bins & How Do They Work?
          </h3>
          <p className="text-sm text-gray-500">4 minute read.</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
