import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsJson from "../data/products.json";
import ProductTabs from "./ProductTab";
import RelatedProducts from "./RelatedProducts";

export default function ProductPage() {
  const { id } = useParams();
  const allProducts = Object.values(productsJson).flat();
  const product = allProducts.find((p) => String(p.id) === String(id));
  const images = [product?.image1, product?.image2, ...(product?.gallery || [])];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!product) return <div className="p-10 text-center text-xl">Product not found.</div>;

  const getImage = (img) => {
    if (!img) return '';
    try {
      return new URL(`../assets/productimg/${img}`, import.meta.url).href;
    } catch {
      return img;
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image Preview */}
        <div>
          {/* Tag */}
          <div className="relative mb-3">
            <span className="absolute top-2 left-2 bg-purple-600 text-white text-sm px-3 py-1 font-semibold rounded">
              -10%
            </span>
          </div>

          {/* Main Image */}
          <div className="w-full bg-white flex items-center justify-center  p-4">
            <img
              src={getImage(selectedImage)}
              alt={product.title}
              className="h-[600px] object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={getImage(img)}
                alt={`thumb-${idx}`}
                className={`w-24 h-28 border-2 object-contain cursor-pointer ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

          <p className="text-red-600 font-extrabold text-3xl mb-3">
            {product.price}
            <span className="line-through text-xl text-gray-400 ml-4">
              {product.oldPrice}
            </span>
          </p>

          <div className="flex mb-6 text-yellow-500 text-2xl">
            {"⭐".repeat(5)}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {product.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus."}
          </p>

          {/* Options */}
          <div className="flex items-center gap-10 mb-8">
            {/* Color */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-black border-2 rounded-full"></div>
                <div className="w-6 h-6 bg-red-600 border-2 rounded-full"></div>
                <div className="w-6 h-6 bg-yellow-500 border-2 rounded-full"></div>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <select className="border-2 text-base px-4 py-2 rounded">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>

          {/* Quantity & Cart */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex border-2 items-center text-lg">
              <button className="px-4 py-2 hover:bg-gray-200">-</button>
              <span className="px-6 py-2 font-medium">1</span>
              <button className="px-4 py-2 hover:bg-gray-200">+</button>
            </div>
            <button className="bg-black text-white text-lg px-8 py-3 uppercase rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>

          {/* Meta Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Categories:</strong> fashion, men</p>
            <p><strong>Tags:</strong> hoodie, jacket, brown, full sleeve</p>
          </div>
        </div>
      </div>
      {/* Product Tabs Section */}
      <ProductTabs />
      <RelatedProducts/>
      
    </>
  );
}
