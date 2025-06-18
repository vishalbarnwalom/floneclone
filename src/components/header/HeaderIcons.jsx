import React from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiShuffle,
  FiMenu,
} from "react-icons/fi";

const HeaderIcons = ({ setMenuOpen }) => (
  <div className="flex items-center space-x-4 text-gray-700 text-xl">
    {/* Hide on mobile, show on lg+ */}
    <FiSearch className="cursor-pointer hidden lg:inline" />
    <FiUser className="cursor-pointer hidden lg:inline" />

    {[FiShuffle, FiHeart].map((Icon, index) => (
      <div className="relative" key={index}>
        <Icon className="cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
    ))}

    <a href="/cart" className="relative">
      <FiShoppingCart className="cursor-pointer" />
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        0
      </span>
    </a>

    {/* Mobile menu icon */}
    <div className="lg:hidden ml-2">
      <button onClick={() => setMenuOpen(true)}>
        <FiMenu />
      </button>
    </div>
  </div>
);

export default HeaderIcons;
