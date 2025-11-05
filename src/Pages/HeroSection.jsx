// HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-pink-50 to-green-50 py-30">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Deal Your <span className="text-primary">Products</span> <br />
          In A <span className="text-primary">Smart</span> Way!
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 text-lg md:text-xl mb-8">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>

        {/* Search Input */}
        <div className="flex justify-center items-center mb-6">
          <input
            type="text"
            placeholder="Search For Products, Categories..."
            className="input input-bordered rounded-l-full w-80 md:w-96 focus:outline-none"
          />
          <button className="btn btn-primary rounded-r-full">
            🔍
          </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn btn-outline btn-primary">Post a Product</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
