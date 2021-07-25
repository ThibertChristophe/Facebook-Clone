import React from "react";
import Navigation from "../components/Navigation";
import LogoFacebook from "../components/LogoFacebook";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="zoneGauche">
        <LogoFacebook />
        <Search />
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
