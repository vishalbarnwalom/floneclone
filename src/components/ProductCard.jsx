import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group bg-white rounded overflow-hidden transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tag Badges */}
      <div className="absolute top-2 right-2 z-20 space-y-1">
        {product.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Product Images */}
      <div className="w-full h-[300px] relative overflow-hidden">
        <img
          src={product.image1}
          alt={product.title}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {product.image2 && (
          <img
            src={product.image2}
            alt={product.title}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Hover Buttons - Staggered */}
        <div
          className={`absolute bottom-0 left-0 w-full flex transition-all duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ backdropFilter: "blur(2px)", background: "rgba(0,0,0,0.3)" }}
        >
          {/* Button 1 - Wishlist */}
          <button
            className={`w-1/5 h-12 flex items-center justify-center bg-purple-700 text-white hover:bg-black transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100 delay-0" : "translate-y-8 opacity-0 delay-0"
            }`}
            style={{ transitionProperty: "all", transitionDelay: hovered ? "0ms" : "0ms" }}
          >
            <FaHeart size={16} />
          </button>

          {/* Button 2 - Select Option */}
          <button
            className={`w-3/5 h-12 flex items-center justify-center bg-purple-700 text-white text-sm font-semibold hover:bg-black transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100 delay-150" : "translate-y-8 opacity-0 delay-0"
            }`}
            style={{ transitionProperty: "all", transitionDelay: hovered ? "150ms" : "0ms" }}
          >
            Select Option
          </button>

          {/* Button 3 - Eye Icon */}
          <button
            className={`w-1/5 h-12 flex items-center justify-center bg-purple-700 text-white hover:bg-black transition-all duration-500 ${
              hovered ? "translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0 delay-0"
            }`}
            style={{ transitionProperty: "all", transitionDelay: hovered ? "300ms" : "0ms" }}
          >
            <FaEye size={16} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-3 text-center">
        <h4 className="text-sm font-semibold mb-1">{product.title}</h4>
        <div className="text-yellow-500 mb-1">⭐⭐⭐☆☆</div>
        <div className="text-sm font-bold text-black">
          {product.price}{" "}
          <span className="line-through text-gray-400 text-xs font-normal">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
