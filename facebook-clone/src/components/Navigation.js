import React from "react";
import LogoNav from "../components/LogoNav";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav />
      </NavLink>
    </div>
  );
};

export default Navigation;
