import React, { useState } from "react";
import LogoFacebook from "./LogoFacebook";

const Search = () => {
  const [logoLoupe, setLogoLoupe] = useState(
    <img src="./img/loupe.svg" width="20px" alt="" />
  );

  const [logoFacebook, setlogoFacebook] = useState(<LogoFacebook />);

  const priseFocus = (e) => {
    e.target.style = "padding-left: 10px;";
    e.target.style.width = "280px";
    setLogoLoupe("");
    setlogoFacebook("");
  };

  const sortieFocus = (e) => {
    e.target.style = "padding-left: 40px;";
    setLogoLoupe(<img src="./img/loupe.svg" width="20px" alt="" />);
    setlogoFacebook(<LogoFacebook />);
  };

  return (
    <div className="search">
      {logoFacebook}
      {logoLoupe}
      <input
        type="search"
        placeholder="Rechercher sur Facebook "
        onFocusCapture={priseFocus}
        onBlur={sortieFocus}
      />
    </div>
  );
};

export default Search;
