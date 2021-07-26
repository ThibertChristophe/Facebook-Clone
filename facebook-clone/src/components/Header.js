import React from "react";
import Navigation from "../components/Navigation";
import LogoFacebook from "../components/LogoFacebook";
import Search from "./Search";
import Menu_Right from "./Menu_Right";

const Header = () => {
  return (
    <div className="header">
      <div className="zoneGauche">
        <LogoFacebook />
        <Search />
      </div>
      <Navigation />
      <Menu_Right />
    </div>
  );
};

export default Header;
