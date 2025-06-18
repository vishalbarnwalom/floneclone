import React, { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import HeaderIcons from "./HeaderIcons";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <DesktopMenu />
        </div>

        {/* Header Icons / Mobile Toggle */}
        <div className="flex-shrink-0">
          <HeaderIcons setMenuOpen={setMenuOpen} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={menuOpen} setIsOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
