import React from "react";
import LogoNav from "../components/LogoNav";
import LogoNav_friends from "./LogoNav_friends";
import LogoNav_play from "./LogoNav_play";
import LogoNav_market from "./LogoNav_market";
import LogoNav_group from "./LogoNav_group";

const Navigation = () => {
  return (
    <div className="navigation">
      <LogoNav />

      <LogoNav_friends />

      <LogoNav_play />

      <LogoNav_market />

      <LogoNav_group />
    </div>
  );
};

export default Navigation;
