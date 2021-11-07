import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" exact className="logoNav logo">
        <img src="/img/home.svg" alt="" />
      </NavLink>

      {/* <NavLink to="/Profil" exact className="logoNav logo"> */}
      <div className="logoNav logo">
        <img src="/img/friends.svg" alt="" />
      </div>
      {/* </NavLink> */}

      <div className="logoNav_play logo">
        <img src="/img/tv.svg" alt="" />
      </div>

      <div className="logoNav_market logo">
        <img src="/img/shop.svg" alt="" />
      </div>

      <div className="logoNav_group logo">
        <img src="/img/group.svg" alt="" />
      </div>
    </div>
  );
};

export default Navigation;
