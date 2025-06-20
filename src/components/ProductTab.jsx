import React, { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("additional");

  const tabs = [
    { key: "additional", label: "Additional Information" },
    { key: "description", label: "Description" },
    { key: "reviews", label: "Reviews(2)" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-14 px-6">
      {/* Centered Tabs */}
      <div className="border-b border-gray-300 flex justify-center space-x-10 text-2xl font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 relative transition-all duration-300 ease-in-out ${
              activeTab === tab.key
                ? "text-black font-bold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black transition-all duration-300" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content with fade transition */}
      <div
        key={activeTab}
        className="mt-10 text-gray-800 text-lg leading-loose min-h-[300px] opacity-0 animate-fadeIn"
      >
        {activeTab === "additional" && (
          <ul className="space-y-4">
            <li><strong>Weight:</strong> 400 g</li>
            <li><strong>Dimensions:</strong> 10 x 10 x 15 cm</li>
            <li><strong>Materials:</strong> 60% cotton, 40% polyester</li>
            <li><strong>Other Info:</strong> American heirloom jean shorts pug seitan letterpress</li>
          </ul>
        )}

        {activeTab === "description" && (
          <p className="max-w-4xl">
            This product is made from premium materials ensuring durability and comfort.
            It is designed with attention to detail and fits a modern lifestyle. Whether
            you're looking for everyday wear or something stylish, this is the right fit.
          </p>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <p><strong>John Doe:</strong> Great product! ⭐⭐⭐⭐⭐</p>
            <p><strong>Jane Smith:</strong> Very comfortable and well-made. ⭐⭐⭐⭐</p>
          </div>
        )}
      </div>

      {/* Fade animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
