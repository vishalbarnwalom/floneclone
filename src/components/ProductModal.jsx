import React, { useState } from "react";
import { FaHeart, FaRandom } from "react-icons/fa";

export default function ProductModal({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(product?.image1 || "");

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto 
                 + bg-[rgba(0,0,0,0.3)] backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl relative my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold z-50"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-6 p-6 overflow-y-auto max-h-[90vh]">
          {/* Left: Images */}
          <div className="flex-1">
            <div className="w-full bg-white p-3 border">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-[320px] object-contain mx-auto"
              />
            </div>
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {[product.image1, product.image2, ...(product?.gallery || [])].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-20 object-contain border cursor-pointer ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                  alt={`variant-${idx}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
            <div className="text-red-600 font-bold text-lg">
              {product.price}{" "}
              <span className="line-through text-gray-400 text-base font-normal ml-2">
                {product.oldPrice}
              </span>
            </div>

            <div className="mt-2 flex text-yellow-500 text-sm">
              {"⭐".repeat(4)}
              {"☆"}
            </div>

            <p className="text-sm text-gray-600 mt-4">
              {product.description ||
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"}
            </p>

            {/* Actions */}
            <div className="flex items-center mt-6 gap-3 flex-wrap">
              <div className="flex border border-gray-300 rounded">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <button className="bg-black text-white font-semibold px-5 py-2 text-sm uppercase">
                Add to Cart
              </button>
              <button className="text-gray-500 hover:text-black text-xl">
                <FaHeart />
              </button>
              <button className="text-gray-500 hover:text-black text-xl">
                <FaRandom />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
