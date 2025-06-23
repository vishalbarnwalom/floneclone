import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsJson from "../data/products.json";

// Image Imports
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

// Image Map
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


const products = {};
Object.keys(productsJson).forEach((category) => {
  products[category] = productsJson[category].map((product) => ({
    ...product,
    image1: imageMap[product.image1],
    image2: imageMap[product.image2],
  }));
});

const tabs = Object.keys(products);

export default function ShopPageWithFilter() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-white py-10 px-4 md:px-10 lg:px-20">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Shop</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 border rounded-md text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products[activeTab]?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
