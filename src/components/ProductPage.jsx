import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsJson from "../data/products.json";

export default function ProductPage() {
  const { id } = useParams();
  const allProducts = Object.values(productsJson).flat();
  const product = allProducts.find((p) => String(p.id) === String(id));
  const images = [product?.image1, product?.image2, ...(product?.gallery || [])];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  const getImage = (img) => {
    if (!img) return '';
    try {
      return new URL(`../assets/productimg/${img}`, import.meta.url).href;
    } catch {
      return img;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Image Preview */}
      <div>
        {/* Tag and Icons */}
        <div className="relative">
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-0.5 font-medium rounded">-10%</span>
        </div>

        <div className="w-full  bg-white flex items-center justify-center">
          <img
            src={getImage(selectedImage)}
            alt={product.title}
            className="h-[500px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={getImage(img)}
              alt={`thumb-${idx}`}
              className={`w-20 h-24 border object-contain cursor-pointer ${
                selectedImage === img ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
        <p className="text-red-600 font-bold text-xl">
          {product.price}
          <span className="line-through text-sm text-gray-400 ml-3">{product.oldPrice}</span>
        </p>

        <div className="flex mt-2 mb-4 text-yellow-500">{"⭐".repeat(5)}</div>

        <p className="text-sm text-gray-600 mb-6">
          {product.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus."}
        </p>

        {/* Options */}
        <div className="flex items-center gap-4 mb-4">
          <div>
            <label className="block text-xs mb-1">Color</label>
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-black border rounded-full"></div>
              <div className="w-5 h-5 bg-red-600 border rounded-full"></div>
              <div className="w-5 h-5 bg-yellow-500 border rounded-full"></div>
            </div>
          </div>

          <div>
            <label className="block text-xs mb-1">Size</label>
            <select className="border text-xs px-2 py-1 rounded">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex border items-center">
            <button className="px-3">-</button>
            <span className="px-4">1</span>
            <button className="px-3">+</button>
          </div>
          <button className="bg-black text-white text-sm px-6 py-2 uppercase">Add to Cart</button>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p>Categories: fashion, men</p>
          <p>Tags: hoodie, jacket, brown, full sleeve</p>
        </div>
      </div>
    </div>
  );
}
