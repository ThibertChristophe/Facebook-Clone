import React from "react";
import Navigation from "../components/Navigation";
import Search from "./Search";
import Menu_Right from "./Menu_Right";

const Header = () => {
  return (
    <div className="header">
      <div className="zoneGauche">
        <Search />
      </div>
      <Navigation />
      <Menu_Right />
    </div>
  );
};

export default Header;
