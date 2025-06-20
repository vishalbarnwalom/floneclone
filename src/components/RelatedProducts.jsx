import React from "react";
import ProductCard from "./ProductCard";
import productsJson from "../data/products.json";

// Product images
import po1 from "../assets/productimg/po1.jpg";
import po2 from "../assets/productimg/po2.jpg";
import po3 from "../assets/productimg/po3.jpg";
import po4 from "../assets/productimg/po4.jpg";
import po5 from "../assets/productimg/po5.jpg";
import po6 from "../assets/productimg/po6.jpg";
import po7 from "../assets/productimg/po7.jpg";
import po8 from "../assets/productimg/po8.jpg";
import po9 from "../assets/productimg/po9.jpg";
import po10 from "../assets/productimg/po10.jpg";
import po11 from "../assets/productimg/po11.jpg";
import po12 from "../assets/productimg/po12.jpg";
import po13 from "../assets/productimg/po13.jpg";
import po14 from "../assets/productimg/po14.jpg";
import po15 from "../assets/productimg/po15.jpg";
import po16 from "../assets/productimg/po16.jpg";

// 🧠 Image map
const imageMap = {
  "po1.jpg": po1,
  "po2.jpg": po2,
  "po3.jpg": po3,
  "po4.jpg": po4,
  "po5.jpg": po5,
  "po6.jpg": po6,
  "po7.jpg": po7,
  "po8.jpg": po8,
  "po9.jpg": po9,
  "po10.jpg": po10,
  "po11.jpg": po11,
  "po12.jpg": po12,
  "po13.jpg": po13,
  "po14.jpg": po14,
  "po15.jpg": po15,
  "po16.jpg": po16,
};


const allProducts = Object.values(productsJson)
  .flat()
  .map((product) => ({
    ...product,
    image1: imageMap[product.image1],
    image2: imageMap[product.image2],
  }));

export default function RelatedProducts() {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-white text-center">
      {/* Heading */}
      <div className="flex items-center justify-center mb-4">
        <div className="block w-10 h-[2px] bg-black mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold">RELATED PRODUCTS</h2>
        <div className="block w-10 h-[2px] bg-black ml-4"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {allProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
