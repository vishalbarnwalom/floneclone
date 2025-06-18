// components/Header/DesktopMenu.jsx
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const DesktopMenu = () => {
  return (
    <nav className="hidden lg:flex space-x-6 text-gray-600 font-medium relative">

      {/* Home with Dropdown */}
      <div className="relative group cursor-pointer">
        <a href="/" className="flex items-center gap-1 text-black  hover:text-purple-600">
          Home <IoIosArrowDown className="text-xs mt-[1px]" />
        </a>

        <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-50">
          {/* Home 1 */}
          <a
            href="/home1"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-300">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-300">
              Home 1
            </span>
          </a>

          {/* Home 2 */}
          <a
            href="/home2"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              Home 2
            </span>
          </a>
        </div>
      </div>

      {/* Other links */}
      <a href="/shop" className="hover:text-purple-600 text-black">Shop</a>
      <a href="/collection" className="hover:text-purple-600 text-black">Collection</a>
             {/* Pages*/}
      <div className="relative group cursor-pointer">
        <a href="#" className="flex items-center gap-1 text-black hover:text-purple-600">
          Pages <IoIosArrowDown className="text-xs mt-[1px]" />
        </a>

        <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-50">
         
          <a
            href="/pages"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-300">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-300">
              Cart
            </span>
          </a>

        
          <a
            href="/home2"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              Checkout
            </span>
          </a>
           <a
            href="/home2"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              Wishlist
            </span>
          </a>
           <a
            href="/home2"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              Compare
            </span>
          </a>
           <a
            href="/account"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              My Account
            </span>
          </a>
           <a
            href="/register"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              Login / Register
            </span>
          </a>
           <a
            href="/about"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-100">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-100">
              About Us
            </span>
          </a>
        </div>
      </div>


      <a href="/contact" className="hover:text-purple-600 text-black">Contact</a>
    </nav>
  );
};

export default DesktopMenu;
