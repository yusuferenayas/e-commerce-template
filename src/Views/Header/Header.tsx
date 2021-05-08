import React from "react";
import "./Header.scss";
import Logo from "Assets/Logo.svg";

const Header = () => {
  return (
    <div id="header">
      <img src={Logo} alt="market logo" />
    </div>
  );
};

export default Header;
