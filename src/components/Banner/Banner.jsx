import React from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaTags } from "react-icons/fa";
import Fb1 from "../../assets/svg/banner1.png";
import Fb2 from "../../assets/svg/banner2.png";
import Fb3 from "../../assets/svg/banner3.png";
import Fb4 from "../../assets/svg/banner4.png";


export default function FeatureBanner() {
  return (
    <div className="w-full bg-white py-8 px-4 md:px-12 lg:px-20">
    <style>{`
      @keyframes horizontal-shaking {
        0% { transform: translateX(0); }
        20% { transform: translateX(3px); }
        40% { transform: translateX(-3px); }
        60% { transform: translateX(3px); }
        80% { transform: translateX(-3px); }
        100% { transform: translateX(0); }
      }
      .shake-on-hover:hover {
        animation: horizontal-shaking 0.2s;
      }
    `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Banner Item 1 */}
        <div className="flex flex-row items-start justify-start sm:items-center sm:justify-center space-x-4 bg-white p-4 rounded text-left">
          <img src={Fb1} alt="Free Shipping" className="w-12 h-12 object-contain shake-on-hover" />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Free Shipping</h4>
            <p className="text-sm text-gray-500">Free shipping on all order</p>
          </div>
        </div>
        {/* Banner Item 2 */}
        <div className="flex flex-row items-start justify-start sm:items-center sm:justify-center space-x-4 bg-white p-4 rounded text-left">
          <img src={Fb2} alt="Support" className="w-12 h-12 object-contain shake-on-hover" />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Support 24/7</h4>
            <p className="text-sm text-gray-500">Free shipping on all order</p>
          </div>
        </div>
        {/* Banner Item 3 */}
        <div className="flex flex-row items-start justify-start sm:items-center sm:justify-center space-x-4 bg-white p-4 rounded text-left">
          <img src={Fb3} alt="Money Return" className="w-12 h-12 object-contain shake-on-hover" />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Money Return</h4>
            <p className="text-sm text-gray-500">Free shipping on all order</p>
          </div>
        </div>
        {/* Banner Item 4 */}
        <div className="flex flex-row items-start justify-start sm:items-center sm:justify-center space-x-4 bg-white p-4 rounded text-left">
          <img src={Fb4} alt="Order Discount" className="w-12 h-12 object-contain shake-on-hover" />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Order Discount</h4>
            <p className="text-sm text-gray-500">Free shipping on all order</p>
          </div>
        </div>
      </div>
    </div>
  );
}
