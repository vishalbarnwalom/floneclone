import React, { useState } from "react";
import { FaHeart, FaRandom } from "react-icons/fa";

export default function ProductModal({ product, onClose }) {
  const [selectedImage, setSelectedImage] = useState(product?.image1 || "");

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div className="bg-white w-full max-w-[1200px] h-[95vh] rounded-lg shadow-xl relative my-8 overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-600 hover:text-black text-3xl font-bold z-50"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row-reverse gap-10 p-10 min-h-full">
          <div className="flex-1 pr-5 text-left">
            <h2 className="text-3xl font-bold mb-3">{product.title}</h2>

            <div className="text-red-600 text-2xl font-extrabold mb-2">
              {product.price}
              <span className="ml-4 text-gray-500 line-through text-xl font-medium">
                {product.oldPrice}
              </span>
            </div>

            <div className="flex text-yellow-500 text-xl mb-4">
              {"⭐".repeat(4)}{"☆"}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {product.description ||
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"}
            </p>

            <hr className="mb-6" />

            <div className="flex items-center gap-5 flex-wrap">
              {/* Quantity Selector */}
              <div className="flex border border-gray-400 rounded overflow-hidden text-lg">
                <button className="px-4 py-2 hover:bg-gray-200">-</button>
                <span className="px-6 py-2 font-medium">1</span>
                <button className="px-4 py-2 hover:bg-gray-200">+</button>
              </div>

              <button
                className="slide-btn bg-transparent border border-black text-black px-8 py-3 text-lg uppercase tracking-wider font-semibold rounded relative overflow-hidden transition-colors duration-300"
                disabled
                style={{ cursor: "not-allowed" }}
              >
                ADD TO CART
                <style jsx>{`
                  .slide-btn {
                    position: relative;
                    overflow: hidden;
                    color: white;
                    background: #343538;
                    z-index: 1;
                    transition: color 0.7s;
                  }
                  .slide-btn::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 0%;
                    height: 100%;
                    background: #a749ff; 
                    z-index: -1;
                    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                  }
                  .slide-btn:hover {
                    color: #fff;
                  }
                  .slide-btn:hover::before {
                    width: 100%;
                  }
                `}</style>
              </button>
              <button className="text-gray-500 hover:text-black text-2xl" title="Wishlist">
                <FaHeart />
              </button>
              <button className="text-gray-500 hover:text-black text-2xl" title="Compare">
                <FaRandom />
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full p-4  mb-30">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-[400px] object-cover mx-auto"
              />
            </div>
            

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto">
              {[product.image1, product.image2, ...(product.gallery || [])].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-24 object-contain border rounded cursor-pointer ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                  alt={`thumb-${idx}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

