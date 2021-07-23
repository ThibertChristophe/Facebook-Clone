import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="about">
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
