import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiShuffle,
  FiMenu,
} from "react-icons/fi";
import SearchBar from "./SearchBar";
import { useCart } from "../../context/CartContext";
import { useWishlist } from '../../context/WishlistContext';
import CartDrawer from "../CartDrawer";
import { useNavigate } from "react-router-dom";

const HeaderIcons = ({ setMenuOpen }) => {
  const { state, dispatch } = useCart();
  const { wishlist } = useWishlist();
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishlist.length;
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-4 text-gray-700 text-xl relative">
      {/* PC Search Icon and Bar */}
      <div className="hidden lg:inline relative">
        <FiSearch
          className="cursor-pointer"
          onClick={() => setShowSearch((v) => !v)}
        />
        {showSearch && (
          <div className="absolute right-0 mt-2 z-50 custom-search-dropdown">
            <div className="p-4">
              <SearchBar autoFocusBar={showSearch} />
            </div>
          </div>
        )}
        <style>{`
          .custom-search-dropdown {
            background: white;
            box-shadow: 0 8px 32px 0 rgba(60, 60, 90, 0.18);
            border-radius: 1rem;
            min-width: 320px;
            max-width: 420px;
            transform-origin: top;
            animation: fadeIn .2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
      {/* Account Dropdown */}
      <div className="relative group cursor-pointer hidden lg:inline">
        <div className="flex items-center gap-1 text-black hover:text-purple-600">
          <FiUser />
          <svg
            className="w-3 h-3 mt-[1px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="absolute top-full left-0 mt-2 w-44 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 z-50">
          <a
            href="/account"
            className="group/item block px-5 py-2 text-sm text-black relative pl-6 hover:text-purple-600  transition-all duration-300"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-600 text-base opacity-0 group-hover/item:opacity-100 transition-all duration-300">
              ●
            </span>
            <span className="inline-block group-hover/item:translate-x-1 transition-all duration-300">
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
        </div>
      </div>
      {/* Shuffle + Wishlist */}
      <div className="relative">
        <FiShuffle className="cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          0
        </span>
      </div>
      <div className="relative">
        <FiHeart className="cursor-pointer" onClick={() => navigate('/wishlist')} />
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {wishlistCount}
          </span>
        )}
      </div>
      {/* Cart Icon */}
      <div className="relative">
        <FiShoppingCart
          className="cursor-pointer"
          onClick={() => dispatch({ type: "TOGGLE_DRAWER" })}
        />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>
      <CartDrawer />
      {/* Mobile menu icon */}
      <div className="lg:hidden ml-2">
        <button onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>
    </div>
  );
};

export default HeaderIcons;
