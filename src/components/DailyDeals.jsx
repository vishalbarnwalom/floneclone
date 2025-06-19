import React, { useState } from "react";
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

// 🧠 Image map to resolve names from JSON
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
  "po16.jpg": po16
};


const products = {};
Object.keys(productsJson).forEach((category) => {
  products[category] = productsJson[category].map((product) => ({
    ...product,
    image1: imageMap[product.image1],
    image2: imageMap[product.image2]
  }));
});

const tabs = Object.keys(products);

export default function DailyDeals() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-white text-center">
      <div className="flex items-center justify-center mb-4">
        <div className="block w-10 h-[2px] bg-black mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-bold">DAILY DEALS!</h2>
        <div className="block w-10 h-[2px] bg-black ml-4"></div>
      </div>

      {/* Tabs */}
      <div className="mt-6 mb-10">
        {/* Mobile layout */}
        <div className="block sm:hidden">
          <div className="flex w-full justify-center gap-4">
            <button
              key={tabs[0]}
              onClick={() => setActiveTab(tabs[0])}
              className={`text-lg font-medium ${activeTab === tabs[0] ? "text-black" : "text-gray-500"} transition duration-300`}
              style={{ minWidth: 100 }}
            >
              {tabs[0]}
            </button>
            <button
              key={tabs[1]}
              onClick={() => setActiveTab(tabs[1])}
              className={`text-lg font-medium ${activeTab === tabs[1] ? "text-black" : "text-gray-500"} transition duration-300`}
              style={{ minWidth: 100 }}
            >
              {tabs[1]}
            </button>
          </div>
          <div className="flex w-full justify-center mt-2">
            <button
              key={tabs[2]}
              onClick={() => setActiveTab(tabs[2])}
              className={`text-lg font-medium ${activeTab === tabs[2] ? "text-black" : "text-gray-500"} transition duration-300`}
              style={{ minWidth: 100 }}
            >
              {tabs[2]}
            </button>
          </div>
        </div>
        {/* Desktop/tablet layout */}
        <div className="hidden sm:flex justify-center space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-medium ${
                activeTab === tab ? "text-black" : "text-gray-500"
              } transition duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products[activeTab].map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
