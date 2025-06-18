import React, { useState } from "react";
import { FiX, FiSearch, FiPlus, FiMinus } from "react-icons/fi";

const MobileDrawer = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleSubmenu = (item) => {
    setOpenMenu(openMenu === item ? null : item);
  };

  const navItems = [
    { label: "Home", submenu: ["Home 1", "Home 2"] },
    { label: "Shop", submenu: ["Men", "Women"] },
    { label: "Collection", submenu: [] },
    { label: "Pages", submenu: ["About", "FAQ", "404"] },
    { label: "Blog", submenu: ["Blog Grid", "Blog Details"] },
    { label: "Contact Us", submenu: [] },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Transparent Overlay */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Close Button OUTSIDE drawer */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 left-5 z-50 text-white bg-black  p-2 text-xl transition-transform duration-900"
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
          {/* Search bar */}
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
            {navItems.map(({ label, submenu }) => (
              <div key={label} className="mb-2">
                <div
                  className="flex justify-between items-center py-3 border-b border-gray-100 cursor-pointer"
                  onClick={() => toggleSubmenu(label)}
                >
                  <span className="uppercase">{label}</span>
                  {submenu.length > 0 &&
                    (openMenu === label ? (
                      <FiMinus className="text-gray-500 text-sm" />
                    ) : (
                      <FiPlus className="text-gray-500 text-sm" />
                    ))}
                </div>

                {submenu.length > 0 && openMenu === label && (
                  <div className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                    {submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href={`/${sub.toLowerCase().replace(" ", "-")}`}
                        className="block hover:text-purple-600"
                      >
                        {sub}
                      </a>
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
