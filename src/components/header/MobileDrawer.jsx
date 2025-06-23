import React, { useState } from "react";
import { FiX, FiSearch, FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (item) => {
    setOpenMenu(openMenu === item ? null : item);
  };

  const navItems = [
    {
      label: "Home",
      submenu: [
        { name: "Home 1", path: "/home1" },
        { name: "Home 2", path: "/home2" },
      ],
    },
    {
      label: "Shop",
      path: "/shop",
      submenu: [],
    },
    {
      label: "Collection",
      path: "/collection",
      submenu: [],
    },
    {
      label: "Pages",
      submenu: [
        { name: "Cart", path: "/cartpage" },
        { name: "Checkout", path: "/checkout" },
        { name: "Wishlist", path: "/wishlist" },
        { name: "Compare", path: "/compare" },
        { name: "My Account", path: "/account" },
        { name: "Login / Register", path: "/register" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      label: "Contact",
      path: "/contact",
      submenu: [],
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent" onClick={() => setIsOpen(false)}></div>

      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 left-5 z-50 text-white bg-black p-2 text-xl"
      >
        <FiX />
      </button>

      {/* Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white shadow-2xl transform transition-transform duration-600 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 pt-8">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md w-full">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search ..."
              className="bg-transparent outline-none w-full text-sm text-gray-700"
            />
          </div>

          {/* Menu */}
          <nav className="pt-6 text-[15px] font-medium text-gray-800">
            {navItems.map(({ label, submenu, path }) => (
              <div key={label} className="mb-2">
                <div
                  className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer"
                  onClick={() =>
                    submenu && submenu.length
                      ? toggleSubmenu(label)
                      : setIsOpen(false)
                  }
                >
                  {submenu?.length > 0 ? (
                    <span className="uppercase">{label}</span>
                  ) : (
                    <Link
                      to={path}
                      className="uppercase block w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  )}

                  {submenu.length > 0 &&
                    (openMenu === label ? (
                      <FiMinus className="text-gray-500 text-sm" />
                    ) : (
                      <FiPlus className="text-gray-500 text-sm" />
                    ))}
                </div>

                {submenu.length > 0 && openMenu === label && (
                  <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                    {submenu.map(({ name, path }) => (
                      <Link
                        key={name}
                        to={path}
                        className="block hover:text-purple-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <div className="mt-6">
              <label className="block mb-1 text-xs text-gray-500">Choose Language</label>
              <select className="w-full border px-3 py-2 text-sm rounded focus:outline-none">
                <option>English</option>
                <option>Hindi</option>
                <option>French</option>
              </select>
            </div>

            {/* Currency Selector */}
            <div className="mt-4">
              <label className="block mb-1 text-xs text-gray-500">Choose Currency</label>
              <select className="w-full border px-3 py-2 text-sm rounded focus:outline-none">
                <option>EUR</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
