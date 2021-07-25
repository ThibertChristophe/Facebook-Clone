import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="zoneGauche">
        <Logo />
        <Search />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
