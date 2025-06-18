// components/Header/Logo.jsx
import React from "react";
import LogoImg from "../../assets/logo.png";

const Logo = () => (
  <div className="flex items-center gap-2">
    <a href="/"><img src={LogoImg} alt="logo" className="h-6 w-auto object-contain" /></a>
  </div>
);

export default Logo;