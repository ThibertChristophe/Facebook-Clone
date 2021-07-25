import React from "react";
import LogoNav from "../components/LogoNav";
import { NavLink } from "react-router-dom";
import LogoNav_friends from "./LogoNav_friends";
import LogoNav_play from "./LogoNav_play";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav_friends />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav_play />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav_friends />
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        <LogoNav_friends />
      </NavLink>
    </div>
  );
};

export default Navigation;
