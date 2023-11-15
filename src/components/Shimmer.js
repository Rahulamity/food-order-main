import React from "react";

const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap justify-between">
        {[...Array(18)].map((_, index) => (
          <div className="shimmer-card mb-4" key={index}>
            <div className="shimmer-bar h-48 bg-gray-200 rounded-lg"></div>
            <div className="shimmer-bar h-16 bg-gray-200 rounded-lg mt-4"></div>
            <div className="shimmer-bar h-12 bg-gray-200 rounded-lg mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;

