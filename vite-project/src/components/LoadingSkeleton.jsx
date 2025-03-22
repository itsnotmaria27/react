import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="product-grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="product-card skeleton"></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;